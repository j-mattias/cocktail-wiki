import { useSearchContext } from "../contexts/SearchResultContext";

const ListResults = () => {
  const { searchResults } = useSearchContext(); // Use searchResults from "SearchResultContext""

  if (!searchResults) {
    return <p>No results found. Check your spelling</p>;
  }

  //  SearchResult Replace with Cards!

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((drink) => (
          <li key={drink.id}>
            <strong>{drink.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListResults;
