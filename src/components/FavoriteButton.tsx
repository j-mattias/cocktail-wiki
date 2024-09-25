import { useFavouriteCocktails } from "../contexts/FavouriteCocktailContext";
import { Cocktail } from "../interfaces";

interface IFavoriteButtonProps {
  cocktail: Cocktail;
}

export function FavoriteButton({cocktail}: IFavoriteButtonProps) {
  const { addFavourite, removeFavourite, favouriteCocktails } = useFavouriteCocktails();

  const isFavorite = favouriteCocktails.some(f => f.id === cocktail.id);
  const computedIconStyle = isFavorite ? "fa-solid" : "fa-regular";

  const handleClick = () => {
    if (isFavorite) {
      removeFavourite(cocktail.id);
    } else if (!isFavorite) {
      addFavourite(cocktail);
    }
  };


  return <i className={`cocktail-fav fa-star ${computedIconStyle}`} onClick={handleClick}></i>;
}
