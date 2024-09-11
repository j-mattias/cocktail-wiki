import { useNavigate } from "react-router-dom";
import "../components/Header.css";

export function HomePage() {
  const navigate = useNavigate();

  const handleRandomizeClick = () => {
    navigate("/");
  };

  return (
    <div className="homepage-container">
      <h1>Welcome to the Cocktail Wiki</h1>
      <p>Discover a variety of cocktails by searching for your favorite cocktails or by letting us help you!</p>

      <button className="randomize-button" onClick={handleRandomizeClick}>
        Randomize Cocktail
      </button>
    </div>
  );
}
