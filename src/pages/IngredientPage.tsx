import { useLoaderData } from "react-router-dom";
import { Cocktail, IIngredient } from "../interfaces";
import { CocktailCard } from "../components";

interface ILoaderData {
  ingredient: IIngredient;
  ingredientImage: string;
  drinks: Cocktail[];
}

export function IngredientPage() {
  const { ingredient, ingredientImage, drinks } = useLoaderData() as ILoaderData;

  return (
    <section className="ingredient-page">
      <h1>{ingredient.strIngredient}</h1>
      <article className="ingredient-description">
        <img src={ingredientImage} alt={`Image of ${ingredient}`} />
        <h2>Description</h2>
        {ingredient.strDescription && <p>{ingredient.strDescription}</p>}
        {ingredient.strABV && <p>Alcohol By Volume: {ingredient.strABV}%</p>}
        {ingredient.strType && <p>Type: {ingredient.strType}</p>}
        {ingredient.strAlcohol && <p>Alcoholic: {ingredient.strAlcohol}</p>}
      </article>
      {drinks.map((drink) => (
        <CocktailCard cocktail={drink} />
      ))}
    </section>
  );
}
