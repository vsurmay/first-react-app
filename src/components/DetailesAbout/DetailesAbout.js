import Image from "../../UI/Image/Image";
import Title from "../../UI/Title/Title";
import "./DetailesAbout.scss";

function DetailesAbout(props) {
  return (
    <div className="detailes__about">
      <Image url={props.item.image} alt={props.item.name} />
      <div className="detailes__about-info">
        <Title recipe>{props.item.name}</Title>
        <p className="detailes__about-text">
          Categore : <span>{props.item.category.toLowerCase()}</span>
        </p>
        <p className="detailes__about-text">
          Time for done : <span>{props.item.timeForDone}</span>
        </p>
        <p className="detailes__about-text">
          Description : <span>{props.item.description}</span>
        </p>
      </div>
    </div>
  );
}

export default DetailesAbout;
