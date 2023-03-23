import "./List.scss";
import ListItem from "../../components/ListItem/ListItem";
import Button from "../../UI/Button/Button";
import Portal from "../../portals/Portal";
import Modal from "../../components/Modal/Modal";
import ContextCurrentPage from "../../ContextCurrentPage";
import { useContext } from "react";

function List({ data, addButton }) {
  const context = useContext(ContextCurrentPage);

  const allReceptItem = [];

  if (data.length) {
    data.map((el) => el.items.forEach((elem) => allReceptItem.push(elem)));
  }

  return (
    <div className="list-page">
      <section className="section__list">
        {context.showModal ? (
          <Portal>
            <Modal
              currentRecipe={data}
              setShowModal={context.setShowModal}
              modalRecept={true}
            />
          </Portal>
        ) : null}
        <div className="container-less">
          {addButton ? (
            <Button
              onClick={() => {
                console.log("hey");
                context.setShowModal(!context.showModal);
              }}
              className="list__add-btn"
            >
              Add Recept
            </Button>
          ) : null}
          <div className="list__wrapper">
            {allReceptItem.map((el, index) => (
              <ListItem infoAboutList={data} key={index} data={el} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
