import './NavBar.css';

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-buttons-container">
        <a href="/">
          {' '}
          <button className="navbar-button"> Re-React-ing </button>
        </a>
        {/* <a href="/react-hooks">
          {' '}
          <button className="navbar-button"> React Hooks </button>
        </a> */}
        {/* <a href="/react-testing">
          {' '}
          <button className="navbar-button"> What about testing? </button>
        </a> */}
        {/* <a href="/next-js">
          {' '}
          <button className="navbar-button"> Contact </button>
        </a> */}
      </div>
    </div>
  );
}
