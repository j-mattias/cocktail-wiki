import { ListResults, Search } from "../components";
import { SearchResultProvider } from "../contexts/SearchResultContext";

export function SearchPage() {
  return (
    <SearchResultProvider>
      <Search />
      <ListResults />
    </SearchResultProvider>
  );
}
