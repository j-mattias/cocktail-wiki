import { Outlet } from 'react-router-dom'
import { SearchContextProvider } from './contexts/SearchResultContext'
import Header from "./components/Header";

function App() {
  return (
    <>
      <p>Hi from App</p>
      <Header />
      <SearchContextProvider>
        <Outlet />
      </SearchContextProvider>
    </>
  );
}

export default App;
