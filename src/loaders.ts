import { reformatData } from "./helpers";

// Get a random cocktail when loading the homepage
export async function randomCocktailLoader() {
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");

  // Convert to json and reformat the data before returning it
  return reformatData(await response.json());
}