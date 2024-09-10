import { useState } from "react";
import { useSearchContext } from "../contexts/SearchResultContext";
import { Pagination } from "./Pagination";

const maxResultsPerPage = 10;

export function ListResults() {
  const { searchResults } = useSearchContext();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const temp = [
    {
      idDrink: "11007",
      strDrink: "Margarita",
      strDrinkAlternate: null,
      strTags: "IBA,ContemporaryClassic",
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: "Contemporary Classics",
      strAlcoholic: "Alcoholic",
      strGlass: "Cocktail glass",
      strInstructions:
        "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
      strInstructionsES: null,
      strInstructionsDE:
        "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      strImageSource: "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
      strImageAttribution: "Cocktailmarler",
      strCreativeCommonsConfirmed: "Yes",
      dateModified: "2015-08-18 14:42:59",
      strIngredients: [
        {
          ingredient: "Tequila",
          measure: "1 1/2 oz ",
        },
        {
          ingredient: "Triple sec",
          measure: "1/2 oz ",
        },
        {
          ingredient: "Lime juice",
          measure: "1 oz ",
        },
        {
          ingredient: "Salt",
          measure: null,
        },
      ],
    },
    {
      idDrink: "11118",
      strDrink: "Blue Margarita",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Cocktail glass",
      strInstructions:
        "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
      strInstructionsES: null,
      strInstructionsDE:
        "Den Rand des Cocktailglases mit Limettensaft einreiben. Den Rand in grobes Salz tauchen. Tequila, blauen Curacao und Limettensaft mit Eis schütteln, in das mit Salz umhüllte Glas abseihen und servieren.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Strofinare il bordo del bicchiere da cocktail con succo di lime. Immergere il bordo nel sale grosso. Shakerare tequila, blue curacao e succo di lime con ghiaccio, filtrare nel bicchiere bordato di sale e servire.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "Yes",
      dateModified: "2015-08-18 14:51:53",
      strIngredients: [
        {
          ingredient: "Tequila",
          measure: "1 1/2 oz ",
        },
        {
          ingredient: "Blue Curacao",
          measure: "1 oz ",
        },
        {
          ingredient: "Lime juice",
          measure: "1 oz ",
        },
        {
          ingredient: "Salt",
          measure: "Coarse ",
        },
      ],
    },
    {
      idDrink: "17216",
      strDrink: "Tommy's Margarita",
      strDrinkAlternate: null,
      strTags: "IBA,NewEra",
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: "New Era Drinks",
      strAlcoholic: "Alcoholic",
      strGlass: "Old-Fashioned glass",
      strInstructions: "Shake and strain into a chilled cocktail glass.",
      strInstructionsES: null,
      strInstructionsDE: "Schütteln und in ein gekühltes Cocktailglas abseihen.",
      strInstructionsFR: null,
      strInstructionsIT: "Shakerare e filtrare in una coppetta da cocktail ghiacciata.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "No",
      dateModified: "2017-09-02 18:37:54",
      strIngredients: [
        {
          ingredient: "Tequila",
          measure: "4.5 cl",
        },
        {
          ingredient: "Lime Juice",
          measure: "1.5 cl",
        },
        {
          ingredient: "Agave syrup",
          measure: "2 spoons",
        },
      ],
    },
    {
      idDrink: "16158",
      strDrink: "Whitecap Margarita",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Other / Unknown",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Margarita/Coupette glass",
      strInstructions:
        "Place all ingredients in a blender and blend until smooth. This makes one drink.",
      strInstructionsES: null,
      strInstructionsDE: "Alle Zutaten in einen Mixer geben und mischen.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Metti tutti gli ingredienti in un frullatore e frulla fino a che non diventa liscio.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "No",
      dateModified: "2015-09-02 17:00:22",
      strIngredients: [
        {
          ingredient: "Ice",
          measure: "1 cup ",
        },
        {
          ingredient: "Tequila",
          measure: "2 oz ",
        },
        {
          ingredient: "Cream of coconut",
          measure: "1/4 cup ",
        },
        {
          ingredient: "Lime juice",
          measure: "3 tblsp fresh ",
        },
      ],
    },
    {
      idDrink: "12322",
      strDrink: "Strawberry Margarita",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Cocktail glass",
      strInstructions:
        "Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.",
      strInstructionsES: null,
      strInstructionsDE:
        "Cocktailglasrand mit Zitronensaft und Tauchrand in Salz wenden. Schnaps, Tequila, Triple-Sec, Zitronensaft und Erdbeeren mit Eis schütteln, in das salzige Glas sieben und servieren.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Strofinare il bordo del bicchiere da cocktail con succo di limone e immergerlo nel sale. Shakerare grappa, tequila, triple sec, succo di limone e fragole con ghiaccio, filtrare nel bicchiere bordato di sale e servire.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "No",
      dateModified: "2015-08-18 14:41:51",
      strIngredients: [
        {
          ingredient: "Strawberry schnapps",
          measure: "1/2 oz ",
        },
        {
          ingredient: "Tequila",
          measure: "1 oz ",
        },
        {
          ingredient: "Triple sec",
          measure: "1/2 oz ",
        },
        {
          ingredient: "Lemon juice",
          measure: "1 oz ",
        },
        {
          ingredient: "Strawberries",
          measure: "1 oz ",
        },
        {
          ingredient: "Salt",
          measure: null,
        },
      ],
    },
    {
      idDrink: "178332",
      strDrink: "Smashed Watermelon Margarita",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Cocktail",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Collins glass",
      strInstructions:
        "In a mason jar muddle the watermelon and 5 mint leaves together into a puree and strain. Next add the grapefruit juice, juice of half a lime and the tequila as well as some ice. Put a lid on the jar and shake. Pour into a glass and add more ice. Garnish with fresh mint and a small slice of watermelon.",
      strInstructionsES: null,
      strInstructionsDE: null,
      strInstructionsFR: null,
      strInstructionsIT:
        "In un barattolo di vetro pestare l'anguria e 5 foglie di menta insieme, filtrare il contenuto in un bicchiere. Quindi aggiungere il succo di pompelmo, il succo di mezzo lime, la tequila e un po 'di ghiaccio. Metti un coperchio sul barattolo e agita. Versare in un bicchiere e aggiungere altro ghiaccio. Guarnire con menta fresca e una fettina di anguria.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg",
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "No",
      dateModified: null,
      strIngredients: [
        {
          ingredient: "Watermelon",
          measure: "1/2 cup",
        },
        {
          ingredient: "Mint",
          measure: "5",
        },
        {
          ingredient: "Grapefruit Juice",
          measure: "1/3 Cup",
        },
        {
          ingredient: "Lime",
          measure: "Juice of 1/2",
        },
        {
          ingredient: "Tequila",
          measure: "1 shot",
        },
        {
          ingredient: "Watermelon",
          measure: "Garnish with",
        },
        {
          ingredient: "Mint",
          measure: "Garnish with",
        },
      ],
    },
    {
      idDrink: "110071",
      strDrink: "Margarita Extra",
      strDrinkAlternate: null,
      strTags: "IBA,ContemporaryClassic",
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: "Contemporary Classics",
      strAlcoholic: "Alcoholic",
      strGlass: "Cocktail glass",
      strInstructions:
        "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
      strInstructionsES: null,
      strInstructionsDE:
        "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      strImageSource: "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
      strImageAttribution: "Cocktailmarler",
      strCreativeCommonsConfirmed: "Yes",
      dateModified: "2015-08-18 14:42:59",
      strIngredients: [
        {
          ingredient: "Tequila",
          measure: "1 1/2 oz ",
        },
        {
          ingredient: "Triple sec",
          measure: "1/2 oz ",
        },
        {
          ingredient: "Lime juice",
          measure: "1 oz ",
        },
        {
          ingredient: "Salt",
          measure: null,
        },
      ],
    },
    {
      idDrink: "111181",
      strDrink: "Blue Margarita Extra",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Cocktail glass",
      strInstructions:
        "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
      strInstructionsES: null,
      strInstructionsDE:
        "Den Rand des Cocktailglases mit Limettensaft einreiben. Den Rand in grobes Salz tauchen. Tequila, blauen Curacao und Limettensaft mit Eis schütteln, in das mit Salz umhüllte Glas abseihen und servieren.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Strofinare il bordo del bicchiere da cocktail con succo di lime. Immergere il bordo nel sale grosso. Shakerare tequila, blue curacao e succo di lime con ghiaccio, filtrare nel bicchiere bordato di sale e servire.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "Yes",
      dateModified: "2015-08-18 14:51:53",
      strIngredients: [
        {
          ingredient: "Tequila",
          measure: "1 1/2 oz ",
        },
        {
          ingredient: "Blue Curacao",
          measure: "1 oz ",
        },
        {
          ingredient: "Lime juice",
          measure: "1 oz ",
        },
        {
          ingredient: "Salt",
          measure: "Coarse ",
        },
      ],
    },
    {
      idDrink: "172161",
      strDrink: "Tommy's Margarita Extra",
      strDrinkAlternate: null,
      strTags: "IBA,NewEra",
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: "New Era Drinks",
      strAlcoholic: "Alcoholic",
      strGlass: "Old-Fashioned glass",
      strInstructions: "Shake and strain into a chilled cocktail glass.",
      strInstructionsES: null,
      strInstructionsDE: "Schütteln und in ein gekühltes Cocktailglas abseihen.",
      strInstructionsFR: null,
      strInstructionsIT: "Shakerare e filtrare in una coppetta da cocktail ghiacciata.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "No",
      dateModified: "2017-09-02 18:37:54",
      strIngredients: [
        {
          ingredient: "Tequila",
          measure: "4.5 cl",
        },
        {
          ingredient: "Lime Juice",
          measure: "1.5 cl",
        },
        {
          ingredient: "Agave syrup",
          measure: "2 spoons",
        },
      ],
    },
    {
      idDrink: "161581",
      strDrink: "Whitecap Margarita Extra",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Other / Unknown",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Margarita/Coupette glass",
      strInstructions:
        "Place all ingredients in a blender and blend until smooth. This makes one drink.",
      strInstructionsES: null,
      strInstructionsDE: "Alle Zutaten in einen Mixer geben und mischen.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Metti tutti gli ingredienti in un frullatore e frulla fino a che non diventa liscio.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "No",
      dateModified: "2015-09-02 17:00:22",
      strIngredients: [
        {
          ingredient: "Ice",
          measure: "1 cup ",
        },
        {
          ingredient: "Tequila",
          measure: "2 oz ",
        },
        {
          ingredient: "Cream of coconut",
          measure: "1/4 cup ",
        },
        {
          ingredient: "Lime juice",
          measure: "3 tblsp fresh ",
        },
      ],
    },
    {
      idDrink: "123221",
      strDrink: "Strawberry Margarita Extra",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Cocktail glass",
      strInstructions:
        "Rub rim of cocktail glass with lemon juice and dip rim in salt. Shake schnapps, tequila, triple sec, lemon juice, and strawberries with ice, strain into the salt-rimmed glass, and serve.",
      strInstructionsES: null,
      strInstructionsDE:
        "Cocktailglasrand mit Zitronensaft und Tauchrand in Salz wenden. Schnaps, Tequila, Triple-Sec, Zitronensaft und Erdbeeren mit Eis schütteln, in das salzige Glas sieben und servieren.",
      strInstructionsFR: null,
      strInstructionsIT:
        "Strofinare il bordo del bicchiere da cocktail con succo di limone e immergerlo nel sale. Shakerare grappa, tequila, triple sec, succo di limone e fragole con ghiaccio, filtrare nel bicchiere bordato di sale e servire.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "No",
      dateModified: "2015-08-18 14:41:51",
      strIngredients: [
        {
          ingredient: "Strawberry schnapps",
          measure: "1/2 oz ",
        },
        {
          ingredient: "Tequila",
          measure: "1 oz ",
        },
        {
          ingredient: "Triple sec",
          measure: "1/2 oz ",
        },
        {
          ingredient: "Lemon juice",
          measure: "1 oz ",
        },
        {
          ingredient: "Strawberries",
          measure: "1 oz ",
        },
        {
          ingredient: "Salt",
          measure: null,
        },
      ],
    },
    {
      idDrink: "1783321",
      strDrink: "Smashed Watermelon Margarita Extra",
      strDrinkAlternate: null,
      strTags: null,
      strVideo: null,
      strCategory: "Cocktail",
      strIBA: null,
      strAlcoholic: "Alcoholic",
      strGlass: "Collins glass",
      strInstructions:
        "In a mason jar muddle the watermelon and 5 mint leaves together into a puree and strain. Next add the grapefruit juice, juice of half a lime and the tequila as well as some ice. Put a lid on the jar and shake. Pour into a glass and add more ice. Garnish with fresh mint and a small slice of watermelon.",
      strInstructionsES: null,
      strInstructionsDE: null,
      strInstructionsFR: null,
      strInstructionsIT:
        "In un barattolo di vetro pestare l'anguria e 5 foglie di menta insieme, filtrare il contenuto in un bicchiere. Quindi aggiungere il succo di pompelmo, il succo di mezzo lime, la tequila e un po 'di ghiaccio. Metti un coperchio sul barattolo e agita. Versare in un bicchiere e aggiungere altro ghiaccio. Guarnire con menta fresca e una fettina di anguria.",
      "strInstructionsZH-HANS": null,
      "strInstructionsZH-HANT": null,
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg",
      strImageSource: null,
      strImageAttribution: null,
      strCreativeCommonsConfirmed: "No",
      dateModified: null,
      strIngredients: [
        {
          ingredient: "Watermelon",
          measure: "1/2 cup",
        },
        {
          ingredient: "Mint",
          measure: "5",
        },
        {
          ingredient: "Grapefruit Juice",
          measure: "1/3 Cup",
        },
        {
          ingredient: "Lime",
          measure: "Juice of 1/2",
        },
        {
          ingredient: "Tequila",
          measure: "1 shot",
        },
        {
          ingredient: "Watermelon",
          measure: "Garnish with",
        },
        {
          ingredient: "Mint",
          measure: "Garnish with",
        },
      ],
    },
  ];

  // Get the last and first index to use when slicing results list
  const lastItemIndex = currentPage * maxResultsPerPage;
  const firstItemIndex = lastItemIndex - maxResultsPerPage;

  // Get the current posts to display
  const currentPosts = temp.slice(firstItemIndex, lastItemIndex);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="list-results">
        {
          currentPosts.map((t) => (
            <article className="cocktail-card" key={t.idDrink}>
              <h3 className="cocktail-title">{t.strDrink}</h3>
            </article>
          ))
          // searchResults.map(cocktail => (
          //   <CocktailCard cocktail={cocktail} />
          // ))
        }
      </section>
      <Pagination
        totalPosts={temp.length}
        resultsPerPage={maxResultsPerPage}
        handleClick={handleClick}
        currentPage={currentPage}
      />
    </>
  );
}
