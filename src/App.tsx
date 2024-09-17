import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { FavouriteCocktailProvider } from "./contexts/FavouriteCocktailContext";

function App() {
  return (
    <FavouriteCocktailProvider>
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    </FavouriteCocktailProvider>
  );
}

export default App;
