import React from "react";

import "./NavItem.scss";

function NavItem({ text }) {
  return (
    <li>
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
        className={true ? "nav__menu-link active" : "nav__menu-link"}
      >
        {text}
      </a>
    </li>
  );
}

export default NavItem;
