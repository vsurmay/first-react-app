import "./HeaderLogo.scss";
import logo from "../../img/logo.svg";

function HeaderLogo() {
  return (
    <div className="nav__logo">
      <a href="!#">
        <img src={logo} alt="Decline" />
      </a>
    </div>
  );
}

export default HeaderLogo;
