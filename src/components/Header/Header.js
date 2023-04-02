import NavItem from "../../UI/NavItem/NavItem";
import HeaderLogo from "../../UI/HeaderLogo/HeaderLogo";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getDish } from "../../redux/actions/actionDish";

function Header({ currentPage, setCurrentPage }) {
  const dispatch = useDispatch();

  const dishData = useSelector((state) => state.dish.data);

  useEffect(() => {
    dispatch(getDish());
  }, []);

  const menuItems = ["Home", "List", "Streach"];
  return (
    <header className="header">
      <div className="container-less">
        <nav className="nav">
          <HeaderLogo />
          <ul className="nav__menu">
            {menuItems.map((el, index) => (
              <NavItem
                dataList={el === "List" ? dishData : null}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                text={el}
                key={index}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
