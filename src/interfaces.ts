// Utility type for optional strings
export type TOptionalString = string | null;

// IDrink interface for raw drink data from the API
export interface IDrink {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: TOptionalString;
  strTags: TOptionalString;
  strVideo: TOptionalString;
  strCategory: string;
  strIBA: TOptionalString;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: TOptionalString;
  strInstructionsDE: TOptionalString;
  strInstructionsFR: TOptionalString;
  strInstructionsIT: TOptionalString;
  "strInstructionsZH-HANS": TOptionalString;
  "strInstructionsZH-HANT": TOptionalString;
  strDrinkThumb: string;
  strIngredient1: TOptionalString;
  strIngredient2: TOptionalString;
  strIngredient3: TOptionalString;
  strIngredient4: TOptionalString;
  strIngredient5: TOptionalString;
  strMeasure1: TOptionalString;
  strMeasure2: TOptionalString;
  strMeasure3: TOptionalString;
  strMeasure4: TOptionalString;
  strMeasure5: TOptionalString;
  strMeasure6: TOptionalString;
  strMeasure7: TOptionalString;
  strMeasure8: TOptionalString;
  strMeasure9: TOptionalString;
  strImageSource: TOptionalString;
  strImageAttribution: TOptionalString;
  strCreativeCommonsConfirmed: TOptionalString;
  dateModified: TOptionalString;
  [key: string]: any; // Allowing dynamic fields
}

// Drink Ingredients structure
interface IDrinkIngredients {
  ingredient: string;
  measure: TOptionalString;
}

// IDrinkReformat interface for reformatted drink data
export interface IDrinkReformat {
  id: string; // Simplified `id`
  name: string; // Simplified `name`
  instructions: string; // Simplified `instructions`
  image: string; // Simplified `image`
  ingredients: IDrinkIngredients[]; // Array of ingredients
  [key: string]: any; // Allow dynamic fields
}

// Simple Cocktail interface for use in favorites
export interface Cocktail {
  id: string;
  name: string;
  image: string;
}

// Mapping function from IDrink to Cocktail
export const mapIDrinkToCocktail = (drink: IDrink): Cocktail => {
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb,
  };
};

// Mapping function from IDrinkReformat to Cocktail
export const mapIDrinkReformatToCocktail = (drink: IDrinkReformat): Cocktail => {
  return {
    id: drink.id,
    name: drink.name,
    image: drink.image,
  };
};
