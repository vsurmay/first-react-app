import NavItem from "../../UI/NavItem/NavItem";
import HeaderLogo from "../../UI/HeaderLogo/HeaderLogo";
import "./Header.scss";

function Header({ setCurentPage }) {
  const menuItems = ["Home", "List", "Streach"];
  return (
    <header className="header">
      <div className="container-less">
        <nav className="nav">
          <HeaderLogo />
          <ul className="nav__menu">
            {menuItems.map((el, index) => (
              <NavItem text={el} setCurentPage={setCurentPage} key={index} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
