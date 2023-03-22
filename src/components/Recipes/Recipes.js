import Title from "../../UI/Title/Title";
import RecipesItem from "../RecipesItem/RecipesItem";
import "./Recipes.scss";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Portal from "../../portals/Portal";
import Button from "../../UI/Button/Button";

function Recipes({ data }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="section__recipes">
      {showModal ? (
        <Portal>
          <Modal setShowModal={setShowModal} />
        </Portal>
      ) : null}
      <div className="container">
        <div className="recipes">
          <Title center>Recipes</Title>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setShowModal(!showModal);
            }}
          >
            Add Recipe
          </Button>
          <div className="recipes__wrapper">
            {data
              ? data.map((el) => <RecipesItem key={el.id} element={el} />)
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;
