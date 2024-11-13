import './Created.css';
import ReactImg from '../../Images/react_logo.png';

export default function CreatedBy() {
  return (
    <div className="created-container">
      <img
        className="react-logo"
        src={ReactImg}
        alt="React logo"
      ></img>
      <p>
        Designed & Developed by
        <a href="https://violeta.cique.es/">Violeta Cique</a>- 2024
      </p>
      <img
        className="react-logo"
        src={ReactImg}
        alt="React logo"
      ></img>
    </div>
  );
}
