import "./List.scss";
import ListItem from "../../components/ListItem/ListItem";
import Button from "../../UI/Button/Button";

function List({ data, addButton }) {
  const allReceptItem = [];

  console.log(data);

  if (data.length) {
    data.map((el) => el.items.forEach((elem) => allReceptItem.push(elem)));
  }

  return (
    <div className="list-page">
      <section className="section__list">
        <div className="container-less">
          {addButton ? (
            <Button className="list__add-btn">Add Recept</Button>
          ) : null}
          <div className="list__wrapper">
            {allReceptItem.map((el, index) => (
              <ListItem infoAboutList={data} key={index} data={el} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
