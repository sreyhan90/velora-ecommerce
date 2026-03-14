"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface FavoriteItemType {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface FavoritesContextType {
  favoriteItems: FavoriteItemType[];
  addToFavorites: (item: FavoriteItemType) => void;
  removeFromFavorites: (id: number) => void;
  toggleFavorite: (item: FavoriteItemType) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
  totalFavorites: number;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

const FAVORITES_STORAGE_KEY = "velora-favorites";

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItemType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (storedFavorites) {
        setFavoriteItems(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to load favorites:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(
        FAVORITES_STORAGE_KEY,
        JSON.stringify(favoriteItems)
      );
    } catch (error) {
      console.error("Failed to save favorites:", error);
    }
  }, [favoriteItems, isLoaded]);

  const addToFavorites = (item: FavoriteItemType) => {
    setFavoriteItems((prev) => {
      const exists = prev.some((fav) => fav.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const removeFromFavorites = (id: number) => {
    setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (item: FavoriteItemType) => {
    setFavoriteItems((prev) => {
      const exists = prev.some((fav) => fav.id === item.id);

      if (exists) {
        return prev.filter((fav) => fav.id !== item.id);
      }

      return [...prev, item];
    });
  };

  const isFavorite = (id: number) => {
    return favoriteItems.some((item) => item.id === id);
  };

  const clearFavorites = () => {
    setFavoriteItems([]);
  };

  const totalFavorites = useMemo(() => {
    return favoriteItems.length;
  }, [favoriteItems]);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
        clearFavorites,
        totalFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
};