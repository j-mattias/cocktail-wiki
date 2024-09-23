import { Params } from "react-router-dom";
import { fetchData, reformatData } from "./helpers";
import { mapIDrinkToCocktail } from "./interfaces";

type TParams = Params<string>;

interface IParams {
  params: TParams;
}

// Get a random cocktail when loading the homepage
export async function randomCocktailLoader() {
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");

  // Convert to json and reformat the data before returning it
  return reformatData(await response.json());
}

// Loader for ingredient details
export async function ingredientLoader({ params }: IParams) {
  try {
    const ingredientName = params.name ? params.name : "";
    const formatName = ingredientName.replace("-", "+");

    // Fetch ingredient information
    const ingredientData = await fetchData(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + params.name,
      "Could not fetch ingredient information"
    );
    // Extract the ingredient object
    const ingredient = ingredientData.ingredients[0];

    // Fetch ingredient thumbnail
    const ingredientImage = await getIngredientThumb(ingredientName);

    // Fetch drinks that uses the ingredient
    const {drinks: drinkList} = await fetchData(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + formatName,
      "Could not fetch drinks with ingredient"
    );

    // Convert drink objects to cocktail compatible interface
    const drinks = drinkList.map(mapIDrinkToCocktail);

    return { ingredient, ingredientImage, drinks };
  } catch (error: any) {
    throw new Error("Failed to fetch ingredient information");
  }
}

// Get thumbnail for a cocktail ingredient
async function getIngredientThumb(ingredient: string) {
  try {
    const formatName = ingredient.trim().toLowerCase();
    const url = `https://www.thecocktaildb.com/images/ingredients/${formatName}.png`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch thumbnail");
    }

    // Return the response url, this endpoint doesn't respond with JSON
    return response.url;
  } catch (error: any) {
    throw new Error("Something went wrong");
  }
}
