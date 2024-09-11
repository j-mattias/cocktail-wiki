import Search from "../components/Search";

import { SearchContextProvider } from "../contexts/SearchResultContext";

export function SearchPage() {
  return (
    <>
      <div>Search Page</div>
      <div>
        <SearchContextProvider>
          <Search />
        </SearchContextProvider>
      </div>
    </>
  );
}
