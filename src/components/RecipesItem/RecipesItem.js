import Title from "../Title/Title";
import Text from "../Text/Text";
import "./RecipesItem.scss";

function RecipesItem(props) {
  return (
    <div className="recipes__item">
      <img
        className="recipes__item-img"
        src={props.element.image}
        alt="image"
      />
      <div className="recipes__item-content">
        <Title className="recipes__item-title" center less>
          {props.element.name}
        </Title>
        <Text className="recipes__item-text" center>
          {props.element.description}
        </Text>
      </div>
    </div>
  );
}

export default RecipesItem;
