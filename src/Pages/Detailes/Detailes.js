import "./Detailes.scss";
import React from "react";
import Image from "../../UI/Image/Image";
import Title from "../../UI/Title/Title";
import Label from "../../UI/Label/Label";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";
import ContextCurrentPage from "../../ContextCurrentPage";

function Detailes({ data, infoAboutList }) {
  const currentPage = React.useContext(ContextCurrentPage);

  return (
    <div className="detailes-page">
      {Array.isArray(data) ? (
        <div className="detailes-page-attention">
          Please turn back and choose recept
        </div>
      ) : (
        <div className="section__detailes">
          <div className="container">
            <div className="detailes">
              <div className="detailes__about">
                <Image url={data.image} alt={data.name} />
                <div className="detailes__about-info">
                  <Title recipe>{data.name}</Title>
                  <p className="detailes__about-text">
                    Categore : <span>{data.category.toLowerCase()}</span>
                  </p>
                  <p className="detailes__about-text">
                    Time for done : <span>{data.timeForDone}</span>
                  </p>
                  <p className="detailes__about-text">
                    Description : <span>{data.description}</span>
                  </p>
                </div>
              </div>
              <form className="detailes__form">
                {data.ingredients.map((el, index) => (
                  <Label
                    key={index}
                    text={el}
                    detailes={true}
                    type={"checkbox"}
                  />
                ))}
                <Text recipe>{data.recipe}</Text>
                <Button
                  back
                  onClick={(e) => {
                    e.preventDefault();
                    currentPage.setCurrentPage({
                      page: "List",
                      data: infoAboutList,
                    });
                  }}
                >
                  Back
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detailes;
