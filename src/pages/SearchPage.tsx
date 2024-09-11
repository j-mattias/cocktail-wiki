import { ListResults, Search } from "../components";

import { SearchContextProvider } from "../contexts/SearchResultContext";

export function SearchPage() {
  return (
    <SearchContextProvider>
      <Search />
      <ListResults />
    </SearchContextProvider>
  );
}
