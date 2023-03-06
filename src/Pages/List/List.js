import "./List.scss";
import ListItem from "../../components/ListItem/ListItem";

// тестовий варіант
import data from "../../data";
const items = data[2].items;

function List() {
  return (
    <div className="list-page">
      <section className="section__list">
        <div className="container-less">
          <div className="list__wrapper">
            {items.map((el, index) => (
              <ListItem key={index} data={el} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
