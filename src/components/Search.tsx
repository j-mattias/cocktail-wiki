import { useState } from "react";
import { useSearchContext } from "../contexts/SearchResultContext";
import { reformatData } from "../helpers";

export const Search = () => {
  // searchname from the userinput
  const [searchName, setSearchName] = useState<string>("");

  // Use setSearchResults from context
  const { setSearchResults } = useSearchContext();

  const [error, setError] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchDrinks(searchName);
  };

  // Fetching the api using the search input for name

  const fetchDrinks = (name: string) => {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed fetch drinks.");
        }
        return response.json();
      })

      // Takes the helper function reformatData and converts it to IDrink format
      .then((data) => {
        if (data.drinks) {
          // Reformat the data to the expected format
          const reformattedDrinks = reformatData(data);

          setSearchResults(reformattedDrinks); // Save to SearchResultContext
        } else {
          setSearchResults(null); // If no drinks found, clear results
        }
        setError(null); // Clear any previous error
      })
      .catch((err) => {
        setError(err.message); // Handle error
        setSearchResults(null); // Clear results on error
      });
  };

  return (
    <div>
      <h1>Search for a Drink</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Enter drink name"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>Error: {error}</p>}
    </div>
  );
};
