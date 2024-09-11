import Search from "../components/Search";
import DrinkList from "../components/ListResults";
import { SearchContextProvider } from "../contexts/SearchResultContext";
import ListResults from "../components/ListResults";

export function SearchPage() {
  return (
    <>
      <div>SearchPage</div>
      <div>
        <SearchContextProvider>
          <Search />
          <ListResults />
        </SearchContextProvider>
      </div>
    </>
  );
}
