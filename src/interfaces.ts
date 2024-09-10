type TOptionalString = string | null;

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
  strIngredient6: TOptionalString;
  strIngredient7: TOptionalString;
  strIngredient8: TOptionalString;
  strIngredient9: TOptionalString;
  strIngredient10: TOptionalString;
  strIngredient11: TOptionalString;
  strIngredient12: TOptionalString;
  strIngredient13: TOptionalString;
  strIngredient14: TOptionalString;
  strIngredient15: TOptionalString;
  strMeasure1: TOptionalString;
  strMeasure2: TOptionalString;
  strMeasure3: TOptionalString;
  strMeasure4: TOptionalString;
  strMeasure5: TOptionalString;
  strMeasure6: TOptionalString;
  strMeasure7: TOptionalString;
  strMeasure8: TOptionalString;
  strMeasure9: TOptionalString;
  strMeasure10: TOptionalString;
  strMeasure11: TOptionalString;
  strMeasure12: TOptionalString;
  strMeasure13: TOptionalString;
  strMeasure14: TOptionalString;
  strMeasure15: TOptionalString;
  strImageSource: TOptionalString;
  strImageAttribution: TOptionalString;
  strCreativeCommonsConfirmed: TOptionalString;
  dateModified: TOptionalString;
  [key: string]: any;
}

interface IDrinkIngredients {
  ingredient: string;
  measure: TOptionalString;
}

export interface IDrinkReformat {
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
  strIngredients: IDrinkIngredients[];
  strImageSource: TOptionalString;
  strImageAttribution: TOptionalString;
  strCreativeCommonsConfirmed: TOptionalString;
  dateModified: TOptionalString;
  [key: string]: TOptionalString | IDrinkIngredients[];
}
