import PageTitle from "../../Pages/Page/PageTitle/PageTitle";
import PageText from "../../Pages/Page/PageText/PageText";
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
        <PageTitle className="recipes__item-title" center less>
          {props.element.name}
        </PageTitle>
        <PageText className="recipes__item-text" center>
          {props.element.description}
        </PageText>
      </div>
    </div>
  );
}

export default RecipesItem;
