import Title from "../Pages/Page/PageTitle/Title";
import PageText from "../Pages/Page/PageText/PageText";
import "./RecipesItem.scss";

function RecipesItem(props) {
  console.log(props.element);
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
        <PageText className="recipes__item-text" center>
          {props.element.description}
        </PageText>
      </div>
    </div>
  );
}

export default RecipesItem;
