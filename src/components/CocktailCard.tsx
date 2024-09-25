import { Link } from "react-router-dom";
import { Cocktail } from "../interfaces";
import "../css/CocktailCard.css";
import { FavoriteButton } from "./FavoriteButton";

interface ICocktailCardProps {
  cocktail: Cocktail;
}

export const CocktailCard = ({ cocktail }: ICocktailCardProps): React.ReactElement => {
  return (
    <article className="cocktail-card">
      <figure className="cocktail-image">
        <img src={cocktail.image} alt={cocktail.name} className="cocktail-image" />
      </figure>
      <FavoriteButton cocktail={cocktail} />

      <h3 className="cocktailcard-info">{cocktail.name}</h3>

      <p>
        <Link to={`/details/${cocktail.id}`}>More info</Link>
      </p>
    </article>
  );
};
