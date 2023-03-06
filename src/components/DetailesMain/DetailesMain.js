import "./DetailesMain.scss";
import DetailesAbout from "./DetailesAbout/DetailesAbout";
import DeatilesForm from "./DetailesForm/DeatilesForm";

function DetailesMain() {
  return (
    <div className="section__detailes">
      <div className="container">
        <div className="detailes">
          <DetailesAbout />
          <DeatilesForm />
        </div>
      </div>
    </div>
  );
}

export default DetailesMain;
