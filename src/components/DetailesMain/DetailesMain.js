import "./DetailesMain.scss";
import DetailesAbout from "../DetailesAbout/DetailesAbout";
import DeatilesForm from "../DetailesForm/DeatilesForm";

function DetailesMain(props) {
  return (
    <div className="section__detailes">
      <div className="container">
        <div className="detailes">
          <DetailesAbout item={props.data} />
          <DeatilesForm item={props.data} />
        </div>
      </div>
    </div>
  );
}

export default DetailesMain;
