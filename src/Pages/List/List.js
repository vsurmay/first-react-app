import "./List.scss";
import ListItem from "../../components/ListItem/ListItem";
import Button from "../../UI/Button/Button";
import Portal from "../../portals/Portal";
import Modal from "../../components/Modal/Modal";

function List({ addButton, data }) {
  return (
    <div className="list-page">
      <section className="section__list">
        {/* {context.showModal ? (
          <Portal>
            <Modal
              currentRecipe={data}
              setShowModal={context.setShowModal}
              modalRecept={true}
            />
          </Portal>
        ) : null} */}
        <div className="container-less">
          {addButton ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="list__add-btn"
            >
              Add Recept
            </Button>
          ) : null}
          <div className="list__wrapper">
            {data
              ? data.map((el, index) => (
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
