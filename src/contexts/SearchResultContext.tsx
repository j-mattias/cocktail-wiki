import { createContext, useContext, useState } from "react";

// Define the types
interface IDrink {
  id: string;
  name: string;
  image: string;
  instructions: string;
}

interface SearchResultContextType {
  searchResults: IDrink[];
  setSearchResults: (results: IDrink[]) => void;
}

// Create the context
const SearchResultContext = createContext<SearchResultContextType | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchResultContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchResultProvider");
  }
  return context;
};

export const SearchResultProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchResults, setSearchResults] = useState<IDrink[]>([]);

  return (
    <SearchResultContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchResultContext.Provider>
  );
};
