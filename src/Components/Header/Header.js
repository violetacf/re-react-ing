import ReactLogo from '../../Images/react_logo.png';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <img
        src={ReactLogo}
        alt="React logo. Looks like some atomic thing in light blue"
      ></img>
      {/* <h1>Re - React - ing</h1> */}
    </div>
  );
}

export default Header;
