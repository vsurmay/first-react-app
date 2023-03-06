import "./DeatilesForm.scss";
import Text from "../Text/Text";
import DetailesLabel from "../DetailesLabel/DetailesLabel";
import Button from "../Button/Button";

function DeatilesForm(props) {
  return (
    <form className="detailes__form">
      {props.item.ingredients.map((el, index) => {
        return <DetailesLabel key={index} text={el} />;
      })}
      <Text recipe>{props.item.recipe}</Text>
      <Button disabled>Back</Button>
    </form>
  );
}

export default DeatilesForm;
