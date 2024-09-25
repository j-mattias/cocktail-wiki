import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IDrink, mapIDrinkToCocktail } from "../interfaces";
import { FavoriteButton } from "../components";

export const CocktailDetailsPage = () => {
  const { id } = useParams<{ id: string }>(); // Extract the id from URL params
  const [cocktail, setCocktail] = useState<IDrink | null>(null); // State for storing cocktail data
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cocktail details.");
        }
        const data = await response.json();
        if (data.drinks) {
          setCocktail(data.drinks[0]); // Get the first drink (assuming there's only one)
        } else {
          setError("Cocktail not found.");
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCocktail(); // Fetch cocktail details if the id is present
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!cocktail) return <p>No cocktail details found.</p>;

  const fetchedCocktail = mapIDrinkToCocktail(cocktail);
  const tags = cocktail.strTags ? cocktail.strTags.split(",") : [];

  return (
    <div className="cocktail-details">
      <h1 className="cocktail-title">
        {cocktail.strDrink}
        <FavoriteButton cocktail={fetchedCocktail} />
      </h1>

      <div className="cocktail-details-wrapper">
        <figure className="cocktail-figure">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: "300px" }} />
        </figure>
        <article className="cocktail-info">
          <h3>Ingredients</h3>
          <div className="details">
            <ul className="links-wrapper">
              {Array.from({ length: 15 }).map((_, index) => {
                const ingredient = cocktail[`strIngredient${index + 1}`];
                const measure = cocktail[`strMeasure${index + 1}`];
                return ingredient ? (
                  <Link className="ingredient-link" to={`../ingredient/${ingredient}`} key={index}>
                    {ingredient} {measure ? `- ${measure}` : ""}
                  </Link>
                ) : null;
              })}
            </ul>
          </div>
          <h3>Glass</h3>
          <p className="details">{cocktail.strGlass}</p>

          <h3>Instructions</h3>
          <p className="details">{cocktail.strInstructions}</p>
          <h3>Category</h3>
          <p className="details">{cocktail.strCategory}</p>
          {tags.length > 0 && (
            <>
              <h3>Tags</h3>
              <div className="tag-wrapper">
                {tags.map((tag) => (
                  <p className="tag" key={tag}>
                    {tag}
                  </p>
                ))}
              </div>
            </>
          )}
        </article>
      </div>
    </div>
  );
};
