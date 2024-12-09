import ReactLogo from '../../Images/react_logo.png';
import './Header.css';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

function Header() {
  return (
    <div className="header-container" data-testid="header">
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <img
          src={ReactLogo}
          alt="React logo. Looks like some atomic thing in light blue"
        />
      </a>
      <div className="language-switch">
        <LanguageSwitch />
      </div>
    </div>
  );
}

export default Header;
