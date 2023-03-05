import "./DeatilesForm.scss";
import DetailesDescription from "./DetailesDescription/DetailesDescription";
import DetailesLabel from "./DetailesLabel/DetailesLabel";
import Button from "../../../../components/Button/Button";

function DeatilesForm() {
  const labelTexts = [
    "1 3-4 lb corned beef brisket",
    "1 large onion, roughly chopped",
    "3 carrots, chopped",
    "3 ribs celery, chopped",
    "1 can tomato paste",
    "12 oz dark beer (stout or porter work well here)",
  ];
  return (
    <form className="detailes__form">
      {labelTexts.map((el, index) => {
        return <DetailesLabel key={index} text={el} />;
      })}

      {/* <DetailesLabel text="1 3-4 lb corned beef brisket" />
      <DetailesLabel text="1 large onion, roughly chopped" />
      <DetailesLabel text="3 carrots, chopped" />
      <DetailesLabel text="3 ribs celery, chopped" />
      <DetailesLabel text="1 can tomato paste" />
      <DetailesLabel text="12 oz dark beer (stout or porter work well here)" /> */}
      <DetailesDescription />
      <Button disabled>Back</Button>
    </form>
  );
}

export default DeatilesForm;
