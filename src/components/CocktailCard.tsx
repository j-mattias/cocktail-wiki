import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { IDrinkReformat } from "../interfaces";

interface ICocktailCardProps {
  cocktail: IDrinkReformat;
}

export function CocktailCard({ cocktail }: ICocktailCardProps): ReactElement {
  return (
    <article className="cocktail-card" >
      <figure className="cocktail-image">
        <img src ={cocktail.strDrinkThumb} className="cocktail-image" />
      </figure>
      <h3 className="cocktail-info">{cocktail.strDrink}</h3>
     
      {/* the address needs to be added */}
      <p><Link to={`/?id=${cocktail.idDrink}`}>More info</Link></p>
    </article>
  );
}