import React from "react";
import "./NavItem.scss";

function NavItem({ text, setCurrentPage, currentPage, dataList }) {
  return (
    <li>
      <a
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage({ page: text, data: dataList, addButton: false });
        }}
        className={
          currentPage.page === text ? "nav__menu-link active" : "nav__menu-link"
        }
      >
        {text}
      </a>
    </li>
  );
}

export default NavItem;
