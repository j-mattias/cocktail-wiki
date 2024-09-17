import { useFavouriteCocktails } from "../contexts/FavouriteCocktailContext";
import { CocktailCard } from "../components/CocktailCard";

export function FavouritePage() {
  const { favouriteCocktails, removeFavourite } = useFavouriteCocktails(); // Access favorite cocktails

  return (
    <div className="favouritepage-container">
      <h1>Your Favourite Cocktails</h1>
      {favouriteCocktails.length > 0 ? (
        <ul>
          {favouriteCocktails.map((cocktail) => (
            <li key={cocktail.id}>
              <CocktailCard cocktail={cocktail} /> {/* Render CocktailCard for each */}
              <button onClick={() => removeFavourite(cocktail.id)}>Remove</button> {/* Remove Button */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No favourite cocktails yet. Add some from the search page!</p>
      )}
    </div>
  );
}

export function FavouritePages() {

// hooks come here  


  return (
    <div></div>

  );
}

