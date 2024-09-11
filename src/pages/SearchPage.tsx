import Search from "../components/Search";
import DrinkList from "../components/ListResult";
import { SearchContextProvider } from "../contexts/SearchResultContext";
import ListResults from "../components/ListResult";

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
