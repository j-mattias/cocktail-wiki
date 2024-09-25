import { useLoaderData, useNavigate } from "react-router-dom";
import { CocktailCard } from "../components/CocktailCard";
import { IDrinkReformat, mapIDrinkReformatToCocktail } from "../interfaces";

export function HomePage() {
  const randomCocktailData = useLoaderData() as IDrinkReformat[];
  const randomCocktail = randomCocktailData?.[0]; // Safeguard for empty data
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <h1 className="uppercase">Welcome to the Cocktail Wiki!</h1>
      {randomCocktail ? (
        <>
          <CocktailCard cocktail={mapIDrinkReformatToCocktail(randomCocktail)} /> {/* Pass mapped cocktail */}
          <button className="randomize-button" onClick={() => navigate("/")}>
            Randomize
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
