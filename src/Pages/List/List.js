import "./List.scss";
import ListItem from "../../components/ListItem/ListItem";
import Button from "../../UI/Button/Button";
import Portal from "../../portals/Portal";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import dataFormRecept from "../../formDatas/formDataRecept";
import { useSelector } from "react-redux/es/exports";

function List({ addButton, recipeId }) {
  const [showModal, setShowModal] = useState(false);

  const data = useSelector((state) => state.dish.data);
  let filterData = [];
  if (recipeId) {
    filterData = data.filter((el) => el.recipeId === recipeId);
  } else {
    filterData = [...data];
  }

  console.log(filterData);
  return (
    <div className="list-page">
      <section className="section__list">
        {showModal ? (
          <Portal>
            <Modal
              data={dataFormRecept}
              setShowModal={setShowModal}
              modalRecept={true}
              recipeId={recipeId}
            />
          </Portal>
        ) : null}
        <div className="container-less">
          {addButton ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
              className="list__add-btn"
            >
              Add Recept
            </Button>
          ) : null}
          <div className="list__wrapper">
            {filterData
              ? filterData.map((el, index) => (
                  <ListItem
                    addButton={addButton}
                    infoAboutList={data}
                    key={index}
                    data={el}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
