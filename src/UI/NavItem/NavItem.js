import ContextCurrentPage from "../../ContextCurrentPage";
import React from "react";

import "./NavItem.scss";

function NavItem({ text }) {
  const contextData = React.useContext(ContextCurrentPage);

  return (
    <li>
      <a
        onClick={(e) => {
          e.preventDefault();
          contextData.setCurrentPage({ page: text, data: contextData.data });
        }}
        className={
          contextData.currentPage === text
            ? "nav__menu-link active"
            : "nav__menu-link"
        }
      >
        {text}
      </a>
    </li>
  );
}

export default NavItem;
