import { useState } from "react";
import { useSearchContext } from "../contexts/SearchResultContext";
import { reformatData } from "../helpers";

export const Search = () => {
  const [searchName, setSearchName] = useState<string>("");
  const { setSearchResults } = useSearchContext(); 
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchName.trim()) {
      fetchDrinks(searchName);
    } else {
      setError("Please enter a valid drink name");
    }
  };

  const fetchDrinks = (name: string) => {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch drinks.");
        }
        return response.json();
      })
      .then((data) => {
        if (data.drinks) {
          const reformattedDrinks = reformatData({ drinks: data.drinks });
          setSearchResults(reformattedDrinks); // Set search results in context
          setError(null);
        } else {
          setSearchResults([]);
          setError("No drinks found.");
        }
      })
      .catch((err) => {
        setError(err.message);
        setSearchResults([]);
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Enter drink name"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};
