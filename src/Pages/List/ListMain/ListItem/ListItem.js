import Button from "../../../../components/Button/Button";
import "./ListItem.scss";
import ListItemLink from "./listItemLink/ListItemLink";

function ListItem(props) {
  return (
    <div className="list__item">
      <img src={props.image} alt="dish" />
      <div className="list__item-discription">
        <ListItemLink />
        <ListItemLink />
        <ListItemLink />
      </div>
      <Button list>Show details</Button>
    </div>
  );
}

export default ListItem;
