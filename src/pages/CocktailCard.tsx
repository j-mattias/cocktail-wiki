// Photo Container
// Photo Title
// Navigation Button to Info Page - “Se mer”
// Receives a cocktail object as a prop.



// This component will receive a cocktail object as a prop (So you will need an interface, you should import the IDrinkReformat interface I believe). The component should return a cocktail card. You could for example make an article tag with a classname cocktail-card and that should contain an img tag with the coktail thumbnail from the cocktail object (that you received as a prop). It should also have an h3 tag with the name of the cocktail and lastly a link to “cocktail-info”.


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
        <img src = "{cocktail.strDrinkThumb}" className="cocktail-image"></img>
    </figure>
      <h3 className="cocktail-info">{cocktail.strDrink}</h3>
     
 {/* the address needs to be added */}
    <p> <Link to="/?id=${cocktail.idDrink}" >More info </Link></p>
    </article>
  );
}