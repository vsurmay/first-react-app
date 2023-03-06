import "./NavItem.scss";

function NavItem(props) {
  return (
    <li key={props.index}>
      <a className="nav__menu-link" href="!#">
        {props.text}
      </a>
    </li>
  );
}

export default NavItem;
