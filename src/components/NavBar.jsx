import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navBar">
      <div className="container d-flex justify-content-between align-items-center">
      <h1 className="logo">Shop Store</h1>
      <ul className="nav">
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/donations'>Donations</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};
export default NavBar;
