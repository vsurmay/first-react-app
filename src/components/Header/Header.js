import HeaderItem from "../HeaderItem/HeaderItem";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import "./Header.scss";

function Header() {
  const menuItems = ["Home", "List", "Streach"];
  return (
    <header className="header">
      <div className="container-less">
        <nav className="nav">
          <HeaderLogo />
          <ul className="nav__menu">
            {menuItems.map((el, index) => (
              <HeaderItem text={el} index={index} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
