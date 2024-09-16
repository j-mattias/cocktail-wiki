import { useLoaderData, useNavigate } from "react-router-dom";
import { createContext, ReactElement, ReactNode, useState } from "react";

import { CocktailCard } from "../components";
import { IDrinkReformat } from "../interfaces";
interface CocktailProviderProps {
  children: ReactNode;
}

export function FavouritePages() {
  return (
    <div className="favouritepage-container">
      <h1>Welcome to the Favourite Page</h1>
    </div>
  );
  // hooks come here
}
