"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { gemstones, type Gemstone } from "@/data/gemstones";

type CartItem = {
  gemstoneId: string;
  quantity: number;
};

type StoreContextValue = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  cartItems: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (gemstone: Gemstone) => void;
  updateCartQuantity: (gemstoneId: string, quantity: number) => void;
  removeFromCart: (gemstoneId: string) => void;
};

const CART_STORAGE_KEY = "ahjar-oloum-cart";
const EMPTY_CART: CartItem[] = [];
let cartSnapshot = EMPTY_CART;
let cartInitialized = false;
const cartListeners = new Set<() => void>();
const StoreContext = createContext<StoreContextValue | null>(null);

function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;

  const item = value as Record<string, unknown>;
  return (
    typeof item.gemstoneId === "string" &&
    gemstones.some((gemstone) => gemstone.id === item.gemstoneId) &&
    typeof item.quantity === "number" &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0
  );
}

function initializeCart() {
  if (cartInitialized) return;
  cartInitialized = true;

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!storedCart) return;

    const parsed: unknown = JSON.parse(storedCart);
    if (!Array.isArray(parsed)) {
      console.error("Saved cart data is not a valid item list.");
      return;
    }

    cartSnapshot = parsed.filter(isCartItem);
  } catch (error) {
    console.error("Unable to load the saved cart.", error);
  }
}

function getCartSnapshot() {
  return cartSnapshot;
}

function getServerCartSnapshot() {
  return EMPTY_CART;
}

function subscribeToCart(listener: () => void) {
  const previousSnapshot = cartSnapshot;
  initializeCart();
  cartListeners.add(listener);
  if (cartSnapshot !== previousSnapshot) listener();
  return () => cartListeners.delete(listener);
}

function updateCart(updater: (items: CartItem[]) => CartItem[]) {
  initializeCart();
  cartSnapshot = updater(cartSnapshot);

  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartSnapshot));
  } catch (error) {
    console.error("Unable to save the cart.", error);
  }

  cartListeners.forEach((listener) => listener());
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const cartItems = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot,
    getServerCartSnapshot,
  );
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((gemstone: Gemstone) => {
    updateCart((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.gemstoneId === gemstone.id,
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.gemstoneId === gemstone.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { gemstoneId: gemstone.id, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((gemstoneId: string) => {
    updateCart((currentItems) =>
      currentItems.filter((item) => item.gemstoneId !== gemstoneId),
    );
  }, []);

  const updateCartQuantity = useCallback(
    (gemstoneId: string, quantity: number) => {
      if (!Number.isInteger(quantity) || quantity < 1) {
        removeFromCart(gemstoneId);
        return;
      }

      updateCart((currentItems) =>
        currentItems.map((item) =>
          item.gemstoneId === gemstoneId ? { ...item, quantity } : item,
        ),
      );
    },
    [removeFromCart],
  );

  const value = useMemo(
    () => ({
      searchTerm,
      setSearchTerm,
      cartItems,
      cartOpen,
      setCartOpen,
      addToCart,
      updateCartQuantity,
      removeFromCart,
    }),
    [
      searchTerm,
      cartItems,
      cartOpen,
      addToCart,
      updateCartQuantity,
      removeFromCart,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return context;
}
