import "./RecipesItem.scss";
import React from "react";
import Title from "../../UI/Title/Title";
import Text from "../../UI/Text/Text";
import Image from "../../UI/Image/Image";
import Button from "../../UI/Button/Button";
import ContextCurrentPage from "../../ContextCurrentPage";

function RecipesItem({ element }) {
  const context = React.useContext(ContextCurrentPage);

  return (
    <div
      onClick={() => {
        context.setCurrentPage({ page: "List", data: [element] });
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
      <Button
        className="recipes__item-delete"
        onClick={(e) => {
          e.stopPropagation();
          context.deleteData(element.id);
        }}
        back
      >
        Delete
      </Button>
    </div>
  );
}

export default RecipesItem;
