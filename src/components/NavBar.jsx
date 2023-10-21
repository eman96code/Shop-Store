import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navBar">
      <h1 className="logo">Shop Store</h1>
      <ul className="nav">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
