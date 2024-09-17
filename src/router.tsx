import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import { HomePage, SearchPage, NotFound, FavouritePage, CocktailDetailsPage } from "./pages"; 
import { randomCocktailLoader } from "./loaders";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<HomePage />} loader={randomCocktailLoader} index />
      <Route element={<SearchPage />} path="search" />
      <Route element={<FavouritePage />} path="favourite" /> 
      <Route element={<CocktailDetailsPage />} path="details/:id" />
      <Route element={<NotFound />} path="*" />
    </Route>
  )
);
