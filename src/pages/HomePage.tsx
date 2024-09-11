import { useLoaderData, useNavigate } from "react-router-dom";
import { CocktailCard } from "../components";
import { IDrinkReformat } from "../interfaces";

export function HomePage() {
  // Retrieve the random cocktail from the randomCocktailLoader associated with the home route
  const randomCocktailData = useLoaderData() as IDrinkReformat[];
  const randomCocktail = randomCocktailData[0];

  const navigate = useNavigate();

  const handleRandomizeClick = () => {
    navigate("/");
  };

  return (
    <div className="homepage-container">
      <h1>Welcome to the Cocktail Wiki</h1>
      <p>Discover a variety of cocktails by searching for your favorite cocktails or by letting us help you!</p>

      <CocktailCard cocktail={randomCocktail} />

      <button className="randomize-button" onClick={handleRandomizeClick}>
        Randomize Cocktail
      </button>
    </div>
  );
}
