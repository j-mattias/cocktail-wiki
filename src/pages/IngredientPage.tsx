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

  // Split the description up in parts, as JSX will escape whitespace. It can then be mapped
  // out with nicer spacing
  const description = ingredient.strDescription ? ingredient.strDescription.split("\r\n\r\n") : [""];

  return (
    <section className="ingredient-page">
      <h1 className="ingredient-title">{ingredient.strIngredient}</h1>
      <article className="ingredient-details">
        <figure className="ingredient-figure">
          <img src={ingredientImage} alt={`Image of ${ingredient}`} />
          <div className="ingredient-specs">
            {ingredient.strAlcohol && (
              <p>
                <span>Alcoholic:</span> {ingredient.strAlcohol}
              </p>
            )}
            {ingredient.strType && (
              <p>
                <span>Type:</span> {ingredient.strType}
              </p>
            )}
            {ingredient.strABV && (
              <p>
                <span>ABV:</span> {ingredient.strABV}%
              </p>
            )}
          </div>
        </figure>
        {ingredient.strDescription && (
          <div className="ingredient-description">
            <h2>Description</h2>
            {description.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </div>
        )}
      </article>
      <section className="ingredient-drinks">
        <h2 className="ingredient-drinks__title">Ingredient In...</h2>
        {drinks.map((drink) => (
          <CocktailCard key={drink.id} cocktail={drink} />
        ))}
      </section>
    </section>
  );
}
