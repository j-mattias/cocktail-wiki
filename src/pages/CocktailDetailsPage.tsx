import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IDrink } from "../interfaces"; 

export const CocktailDetailsPage = () => {
  const { id } = useParams<{ id: string }>(); // Extract the id from URL params
  const [cocktail, setCocktail] = useState<IDrink | null>(null); // State for storing cocktail data
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
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

  return (
    <div className="cocktail-details">
      {/* Cocktail Name */}
      <h1>{cocktail.strDrink}</h1>
      
      {/* Cocktail Image */}
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: "300px" }} />

      {/* Category, Tags and Glass */}
      <h3>Category: {cocktail.strCategory}</h3>
      <p>Tags: {cocktail.strTags || "No tags available"}</p>
      <p>Served in: {cocktail.strGlass}</p>
      
      {/* Instructions */}
      <h3>Instructions</h3>
      <p>{cocktail.strInstructions}</p>

      {/* Ingredients and Measures */}
      <h3>Ingredients</h3>
      <ul>
        {Array.from({ length: 15 }).map((_, index) => {
          const ingredient = cocktail[`strIngredient${index + 1}`];
          const measure = cocktail[`strMeasure${index + 1}`];
          return ingredient ? (
            <Link to={`../ingredient/${ingredient}`}key={index}>
              {ingredient} {measure ? `- ${measure}` : ""}
            </Link>
          ) : null;
        })}
      </ul>
    </div>
  );
};
