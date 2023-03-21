import "./List.scss";
import ListItem from "../../components/ListItem/ListItem";

// // // тестовий варіант
// import datas from "../../data";
// const items = datas[2].items;

function List({ data }) {
  const allReceptItem = [];

  if (data.length) {
    data.map((el) => el.items.forEach((elem) => allReceptItem.push(elem)));
  }

  return (
    <div className="list-page">
      <section className="section__list">
        <div className="container-less">
          <div className="list__wrapper">
            {allReceptItem.map((el, index) => (
              <ListItem key={index} data={el} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
