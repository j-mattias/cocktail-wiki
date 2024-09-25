import { useState } from "react";
import { useSearchContext } from "../contexts/SearchResultContext";
import { CocktailCard } from "../components/CocktailCard";
import { Pagination } from "./Pagination";

const maxResultsPerPage = 10;

export function ListResults() {
  const { searchResults } = useSearchContext();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const results = searchResults ? searchResults : [];

  const lastItemIndex = currentPage * maxResultsPerPage;
  const firstItemIndex = lastItemIndex - maxResultsPerPage;
  const currentPosts = results.slice(firstItemIndex, lastItemIndex);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="list-container">
      <section className="list-results">
        {currentPosts.map((cocktail) => (
          <CocktailCard key={cocktail.id} cocktail={cocktail} />
        ))}
      </section>
      <Pagination
        totalPosts={results.length}
        resultsPerPage={maxResultsPerPage}
        handleClick={handleClick}
        currentPage={currentPage}
      />
    </section>
  );
}
