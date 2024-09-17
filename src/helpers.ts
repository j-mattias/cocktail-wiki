import { IDrink, IDrinkReformat } from "./interfaces";

// Reformat raw API response data into a list of IDrinkReformat objects
export function reformatData(data: { drinks: IDrink[] }): IDrinkReformat[] {
  return data.drinks.map((drink) => {
    const ingredients: { ingredient: string; measure: string | null }[] = [];
    
    // Loop through ingredients and measures dynamically
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ ingredient, measure: measure || null });
      }
    }

    return {
      id: drink.idDrink,
      name: drink.strDrink,
      instructions: drink.strInstructions,
      image: drink.strDrinkThumb,
      ingredients, // Add the ingredients array
    };
  });
}
