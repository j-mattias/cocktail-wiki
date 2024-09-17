import { useLoaderData, useNavigate } from "react-router-dom";
import { useFavouriteCocktails } from "../contexts/FavouriteCocktailContext";
import { CocktailCard } from "../components/CocktailCard";
import { IDrinkReformat, mapIDrinkReformatToCocktail } from "../interfaces";

export function HomePage() {
  const randomCocktailData = useLoaderData() as IDrinkReformat[];
  const randomCocktail = randomCocktailData?.[0]; // Safeguard for empty data
  const navigate = useNavigate();

  const { addFavourite } = useFavouriteCocktails();

  const handleAddToFavourites = () => {
    if (!randomCocktail) return; // Ensure randomCocktail exists
    const cocktail = mapIDrinkReformatToCocktail(randomCocktail); // Map to Cocktail type
    addFavourite(cocktail);
  };

  return (
    <div className="homepage-container">
      <h1>Welcome to the Cocktail Wiki!</h1>
      {randomCocktail ? (
        <>
          <CocktailCard cocktail={mapIDrinkReformatToCocktail(randomCocktail)} /> {/* Pass mapped cocktail */}
          <button className="randomize-button" onClick={() => navigate("/")}>
            Randomize Cocktail
          </button>
          <button onClick={handleAddToFavourites}>Add to Favourites</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
