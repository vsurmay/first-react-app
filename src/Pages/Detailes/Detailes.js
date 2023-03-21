import "./Detailes.scss";
import Image from "../../UI/Image/Image";
import Title from "../../UI/Title/Title";
import Label from "../../UI/Label/Label";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";

// тестовий варіант
// import data from "../../data";
// const item = data[0].items[0];

function Detailes({ data }) {
  return (
    <div className="detailes-page">
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
                <Label key={index} text={el} />
              ))}
              <Text recipe>{data.recipe}</Text>
              <Button disabled>Back</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detailes;
