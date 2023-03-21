import "./NavItem.scss";

function NavItem({ text, setCurentPage }) {
  return (
    <li>
      <a
        onClick={(e) => {
          e.preventDefault();
          setCurentPage(text);
        }}
        className="nav__menu-link"
      >
        {text}
      </a>
    </li>
  );
}

export default NavItem;
