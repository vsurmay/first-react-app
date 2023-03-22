import Title from "../../UI/Title/Title";
import RecipesItem from "../RecipesItem/RecipesItem";
import "./Recipes.scss";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Portal from "../../portals/Portal";

function Recipes({ data }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="section__recipes">
      {showModal ? (
        <Portal>
          <Modal />
        </Portal>
      ) : null}
      <div className="container">
        <div className="recipes">
          <Title center>Recipes</Title>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log("yes");
              setShowModal(!showModal);
            }}
          >
            Add Recipe
          </button>
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
