import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">Crypto Prices</Link>
      <Link to="/currencies">Currencies</Link>
    </div>
  );
}