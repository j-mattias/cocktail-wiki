import { Outlet } from 'react-router-dom'
import { SearchContextProvider } from './contexts/SearchResultContext'

function App() {

  return (
    <>
      <p>Hi from App</p>
      <SearchContextProvider>
        <Outlet />
      </SearchContextProvider>
    </>
  )
}

export default App
