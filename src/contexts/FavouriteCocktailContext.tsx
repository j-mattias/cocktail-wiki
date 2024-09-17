import React, { createContext, useContext, useState, ReactNode } from "react";

// Define and export the `Cocktail` interface
export interface Cocktail {
  id: string;
  name: string;
  image: string;
}

interface FavouriteCocktailContextProps {
  favouriteCocktails: Cocktail[];
  addFavourite: (cocktail: Cocktail) => void;
  removeFavourite: (id: string) => void;
}

const FavouriteCocktailContext = createContext<FavouriteCocktailContextProps | undefined>(undefined);

export const useFavouriteCocktails = () => {
  const context = useContext(FavouriteCocktailContext);
  if (!context) {
    throw new Error("useFavouriteCocktails must be used within a FavouriteCocktailProvider");
  }
  return context;
};

// Use React.FC<PropsWithChildren> to handle children
export const FavouriteCocktailProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favouriteCocktails, setFavouriteCocktails] = useState<Cocktail[]>([]);

  const addFavourite = (cocktail: Cocktail) => {
    setFavouriteCocktails((prev) => {
      if (!prev.find((fav) => fav.id === cocktail.id)) {
        console.log("Adding to favorites:", cocktail); // Log added drink
        return [...prev, cocktail];
      }
      console.log("Duplicate found, not adding:", cocktail); // Log duplicate attempt
      return prev; // Return unchanged if duplicate
    });
  };

  const removeFavourite = (id: string) => {
    setFavouriteCocktails((prev) => prev.filter((cocktail) => cocktail.id !== id));
  };

  return (
    <FavouriteCocktailContext.Provider value={{ favouriteCocktails, addFavourite, removeFavourite }}>
      {children}
    </FavouriteCocktailContext.Provider>
  );
};
