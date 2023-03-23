import Title from "../../UI/Title/Title";
import RecipesItem from "../RecipesItem/RecipesItem";
import "./Recipes.scss";
import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Portal from "../../portals/Portal";
import Button from "../../UI/Button/Button";
import ContextCurrentPage from "../../ContextCurrentPage";

function Recipes() {
  const [showModal, setShowModal] = useState(false);

  const context = React.useContext(ContextCurrentPage);

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
            {context.data
              ? context.data.map((el) => (
                  <RecipesItem key={el.id} element={el} />
                ))
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;
