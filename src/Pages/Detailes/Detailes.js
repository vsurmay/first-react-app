import "./Detailes.scss";
import Image from "../../UI/Image/Image";
import Title from "../../UI/Title/Title";
import Label from "../../UI/Label/Label";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";

// тестовий варіант
import data from "../../data";
const item = data[0].items[0];

function Detailes() {
  return (
    <div className="detailes-page">
      <div className="section__detailes">
        <div className="container">
          <div className="detailes">
            <div className="detailes__about">
              <Image url={item.image} alt={item.name} />
              <div className="detailes__about-info">
                <Title recipe>{item.name}</Title>
                <p className="detailes__about-text">
                  Categore : <span>{item.category.toLowerCase()}</span>
                </p>
                <p className="detailes__about-text">
                  Time for done : <span>{item.timeForDone}</span>
                </p>
                <p className="detailes__about-text">
                  Description : <span>{item.description}</span>
                </p>
              </div>
            </div>
            <form className="detailes__form">
              {item.ingredients.map((el, index) => (
                <Label key={index} text={el} />
              ))}
              <Text recipe>{item.recipe}</Text>
              <Button disabled>Back</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detailes;
