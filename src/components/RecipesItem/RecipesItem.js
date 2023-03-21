import "./RecipesItem.scss";
import React from "react";
import Title from "../../UI/Title/Title";
import Text from "../../UI/Text/Text";
import Image from "../../UI/Image/Image";
import ContextCurrentPage from "../../ContextCurrentPage";

function RecipesItem({ element }) {
  const currentPage = React.useContext(ContextCurrentPage);

  return (
    <div
      onClick={() => {
        console.log(element);
        currentPage.setCurrentPage({ page: "List", data: element });
      }}
      className="recipes__item"
    >
      <Image url={element.image} alt={element.name} />
      <div className="recipes__item-content">
        <Title className="recipes__item-title" center less>
          {element.name}
        </Title>
        <Text className="recipes__item-text" center>
          {element.description}
        </Text>
      </div>
    </div>
  );
}

export default RecipesItem;
