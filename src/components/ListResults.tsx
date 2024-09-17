import { useState } from "react";
import { useSearchContext } from "../contexts/SearchResultContext";
import { CocktailCard } from "../components/CocktailCard";
import { useFavouriteCocktails, Cocktail } from "../contexts/FavouriteCocktailContext"; 
import { Pagination } from "./Pagination";

const maxResultsPerPage = 10;

export function ListResults() {
  const { searchResults } = useSearchContext();
  const { addFavourite } = useFavouriteCocktails(); 
  const [currentPage, setCurrentPage] = useState<number>(1);

  const results = searchResults ? searchResults : [];

  const lastItemIndex = currentPage * maxResultsPerPage;
  const firstItemIndex = lastItemIndex - maxResultsPerPage;
  const currentPosts = results.slice(firstItemIndex, lastItemIndex);

  const handleAddToFavorites = (drink: Cocktail) => {
    addFavourite(drink); 
  };

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="list-results">
      {currentPosts.map((cocktail) => (
        <div key={cocktail.id} className="drink-card">
          <CocktailCard cocktail={cocktail} />
          <button onClick={() => handleAddToFavorites(cocktail)}>Add to Favorites</button> {/* Add to Favourites button */}
        </div>
      ))}
      <Pagination
        totalPosts={results.length}
        resultsPerPage={maxResultsPerPage}
        handleClick={handleClick}
        currentPage={currentPage}
      />
    </section>
  );
}
