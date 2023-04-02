import "./RecipesItem.scss";
import React from "react";
import Title from "../../UI/Title/Title";
import Text from "../../UI/Text/Text";
import Image from "../../UI/Image/Image";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { deleteRecept } from "../../redux/actions/actionsRecept";
import { useSelector } from "react-redux";

function RecipesItem({ element, setCurrentPage }) {
  const dispatch = useDispatch();

  const allDishes = useSelector((state) => state.dish.data);

  return (
    <div
      onClick={() => {
        setCurrentPage({
          page: "List",
          data: allDishes,
          addButton: true,
          recipeId: element.id,
        });
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
          dispatch(deleteRecept(element.id));
        }}
        back
      >
        Delete
      </Button>
    </div>
  );
}

export default RecipesItem;
