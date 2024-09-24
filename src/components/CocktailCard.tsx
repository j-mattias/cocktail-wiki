import { Link } from "react-router-dom";
import { Cocktail } from "../interfaces";
import "../css/CocktailCard.css";

interface ICocktailCardProps {
  cocktail: Cocktail;
}

export const CocktailCard = ({
  cocktail,
}: ICocktailCardProps): React.ReactElement => {
  return (
    <article className="cocktail-card">
      <figure className="cocktail-image">
        <img
          src={cocktail.image}
          alt={cocktail.name}
          className="cocktail-image"
        />
      </figure>
      {/* Placeholder for favorite button*/}
      <div className="cocktail-fav">★</div>

      <h3 className="cocktail-info">{cocktail.name}</h3>

      <p>
        <Link to={`/details/${cocktail.id}`}>More info</Link>
      </p>
    </article>
  );
};
