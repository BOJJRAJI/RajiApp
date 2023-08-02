import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <Link to="/home">Home</Link>
    {"                "}
    <Link to="/about">About</Link>
  </div>
);

export default Header;
