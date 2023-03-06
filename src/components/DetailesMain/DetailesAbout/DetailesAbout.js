import "./DetailesAbout.scss";
import image from "./about.jpg";

function DetailesAbout() {
  return (
    <div className="detailes__about">
      <img className="detailes__about-img" src={image} alt="dish" />
      <div className="detailes__about-info">
        <h3 className="detailes__about-title">Recipe name</h3>
        <p className="detailes__about-text">
          Categore : <span>main</span>
        </p>
        <p className="detailes__about-text">
          Time fome done : <span>1h 20 min</span>
        </p>
        <p className="detailes__about-text">
          Description :{" "}
          <span>
            A very big problem I see with most restaurants is that they describe
            their menu items with a lifeless list of ingredients
          </span>
        </p>
      </div>
    </div>
  );
}

export default DetailesAbout;
