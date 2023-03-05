import "./DeatilesForm.scss";
import DetailesDescription from "./DetailesDescription/DetailesDescription";
import DetailesLabel from "./DetailesLabel/DetailesLabel";
import Button from "../../../../components/Button/Button";

function DeatilesForm() {
  return (
    <form className="detailes__form">
      <DetailesLabel text="1 3-4 lb corned beef brisket" />
      <DetailesLabel text="1 large onion, roughly chopped" />
      <DetailesLabel text="3 carrots, chopped" />
      <DetailesLabel text="3 ribs celery, chopped" />
      <DetailesLabel text="1 can tomato paste" />
      <DetailesLabel text="12 oz dark beer (stout or porter work well here)" />
      <DetailesDescription />
      <Button disabled color="rgba(255, 57, 57, 0.6)">
        Back
      </Button>
    </form>
  );
}

export default DeatilesForm;
