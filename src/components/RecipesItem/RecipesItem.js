import "./RecipesItem.scss";
import Title from "../Title/Title";
import Text from "../Text/Text";
import Image from "../Image/Image";

function RecipesItem(props) {
  return (
    <div className="recipes__item">
      <Image url={props.element.image} alt={props.element.name} />
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
