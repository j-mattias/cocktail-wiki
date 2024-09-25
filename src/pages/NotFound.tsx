import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <div>Not Found</div>
      <Link to="/">Back To Home </Link>
    </>
  );
}
