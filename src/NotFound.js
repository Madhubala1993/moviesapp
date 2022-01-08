import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="not-found">
      <h1>Not found !!!</h1>
      <img className="not-found-img"
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt="" /><br />
      <Link to="/">Home</Link>
    </div>
  );
}
