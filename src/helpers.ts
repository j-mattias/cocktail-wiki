import { IDrink, IDrinkReformat } from "./interfaces";

interface IReformatData {
  drinks: IDrink[];
}

// Takes the API response object and returns a list of reformatted objects
export function reformatData(data: IReformatData): IDrinkReformat[] {
  // Extract the array of objects from the API object response
  const dataArr = data.drinks;

  const newArr = dataArr.map((data) => {
    // New object to be stored
    const drinkObj = {} as IDrinkReformat;

    let ingredientLength = 0;

    // Add all properties except those that include "strIngredient" or "strMeasure"
    Object.keys(data).forEach((key) => {
      if (!Object.hasOwn(drinkObj, key)) {
        if (!key.includes("strIngredient") && !key.includes("strMeasure")) {
          drinkObj[key] = data[key];

          // Dynamically keep track of possible amount of ingredients and
          // helps prevent unnecessary iterations when looping through ingredients
        } else if (key.includes("strIngredient") && data[key]) {
          ingredientLength++;
        }
      }
    });

    // Initialize a new property on the object to store a list of matching
    // ingredient and measure objects
    drinkObj.strIngredients = [];

    // Loop over the amount of ingredients
    for (let i = 1; i <= ingredientLength; i++) {
      // Get the ingredient/measure value. This also ensures ingredient/measure indexes match
      const ingredient = data[`strIngredient${i}`];
      const measure = data[`strMeasure${i}`];

      // If there's ingredient and measure add them, if there's only ingredient set null measure
      if (ingredient && measure) {
        drinkObj.strIngredients.push({ ingredient, measure });
      } else if (ingredient) {
        drinkObj.strIngredients.push({ ingredient, measure });
      }
    }

    return drinkObj;
  });

  return newArr;
}
