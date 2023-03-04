import "./Header.scss";
import myLogo from "./logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container-less">
        <nav className="nav">
          <div className="nav__logo">
            <a href="!#">
              <img src={myLogo} alt="Decline" />
            </a>
          </div>
          <ul className="nav__menu">
            <li>
              <a className="nav__menu-link" href="!#">
                Home
              </a>
            </li>
            <li>
              <a className="nav__menu-link" href="!#">
                List
              </a>
            </li>
            <li>
              <a className="nav__menu-link" href="!#">
                Streach
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
