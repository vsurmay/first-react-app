import "./Recipes.scss";
import Title from "../../UI/Title/Title";
import RecipesItem from "../RecipesItem/RecipesItem";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Portal from "../../portals/Portal";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getRecept } from "../../redux/actions/actionsRecept";
import formDataDish from "../../formDatas/formDataDish";

function Recipes() {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRecept());
  }, []);

  return (
    <section className="section__recipes">
      {showModal ? (
        <Portal>
          <Modal setShowModal={setShowModal} data={formDataDish} />
        </Portal>
      ) : null}
      <div className="container">
        <div className="recipes">
          <Title center>Recipes</Title>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
          >
            Add Recipe
          </Button>
          <div className="recipes__wrapper">
            {recipe.data
              ? recipe.data.map((el) => (
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
