import "./List.css";
import ListItem from "../Listitem/ListItem";

function List(props) {
  return (
    <ul className="list">
      <ListItem text={props.username} />
      <ListItem text={props.suite} />
      <ListItem text={props.city} />
      <ListItem text={props.email} />
    </ul>
  );
}

export default List;
