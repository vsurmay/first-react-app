import "./List.scss";
import ListItem from "../../components/ListItem/ListItem";

function List(props) {
  return (
    <div className="list-page">
      <section className="section__list">
        <div className="container-less">
          <div className="list__wrapper">
            {props.data.map((el, index) => (
              <ListItem setDataItem={props.setDataItem} key={index} data={el} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
