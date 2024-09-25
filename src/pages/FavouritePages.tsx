import { useFavouriteCocktails } from "../contexts/FavouriteCocktailContext";
import { CocktailCard } from "../components/CocktailCard";

export function FavouritePage() {
  const { favouriteCocktails } = useFavouriteCocktails(); // Access favorite cocktails

  return (
    <div className="favouritepage-container">
      <h1 className="uppercase">Your Favourite Cocktails</h1>
      {favouriteCocktails.length > 0 ? (
        <ul className="favourite-cocktails-container">
          {favouriteCocktails.map((cocktail) => (
            <li key={cocktail.id}>
              <CocktailCard cocktail={cocktail} /> {/* Render CocktailCard for each */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No favourite cocktails yet. Add some from the search page!</p>
      )}
    </div>
  );
}
