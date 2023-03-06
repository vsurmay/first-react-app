import "./ListItem.scss";
import Button from "../../UI/Button/Button";
import ListItemLink from "../../UI/ListItemLink/ListItemLink";
import Image from "../../UI/Image/Image";

function ListItem(props) {
  return (
    <div className="list__item">
      <Image url={props.data.image} alt={props.data.name} />
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
