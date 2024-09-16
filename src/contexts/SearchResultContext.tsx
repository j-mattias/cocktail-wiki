import { createContext, ReactNode, useContext, useState } from "react";
import { IDrinkReformat } from "../interfaces";

type TDrinkValue = IDrinkReformat[] | null;

interface ISearchContext {
  searchResults: TDrinkValue;
  setSearchResults: React.Dispatch<React.SetStateAction<TDrinkValue>>;
}

interface ISearchContextProviderProps {
  children: ReactNode;
}

const SearchContext = createContext<ISearchContext | null>(null);
console.log(SearchContext);

// Used to wrap any children components that need access to reading/updating the searchResults
export function SearchContextProvider({ children }: ISearchContextProviderProps) {
  const [searchResults, setSearchResults] = useState<TDrinkValue>(null);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook for the search context to avoid repeating code in components that use it
export function useSearchContext() {
  const context = useContext(SearchContext);

  // If you try to use this context outside of SearchContextProvider, throw an error to
  // notify the developer
  if (!context) {
    throw new Error("useSearchContext must be used within SearchContextProvider");
  }

  return context;
}
