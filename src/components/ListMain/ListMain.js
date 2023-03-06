import "./ListMain.scss";
import ListItem from "../ListItem/ListItem";

// тестовий варіант
import data from "../../data";
const items = data[2].items;

function ListMain() {
  return (
    <section className="section__list">
      <div className="container-less">
        <div className="list__wrapper">
          {items.map((el, index) => (
            <ListItem key={index} data={el} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListMain;
