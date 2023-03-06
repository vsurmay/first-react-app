import "./HeaderItem.scss";

function HeaderItem(props) {
  return (
    <li key={props.index}>
      <a className="nav__menu-link" href="!#">
        {props.text}
      </a>
    </li>
  );
}

export default HeaderItem;
