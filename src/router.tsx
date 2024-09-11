import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import { HomePage, SearchPage,NotFound, CocktailCard } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<HomePage />} index />
      <Route element={<SearchPage />} path="search" />
      <Route  element={<NotFound />} path="*" />
    </Route>
));