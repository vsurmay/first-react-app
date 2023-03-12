import React from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import buttonIcon from "../../icon/button-icon.svg";
import "./Form.scss";

let idCount = 0;

const Form = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (!props.inputValue.trim()) {
      props.setInputValue("");
      return;
    }
    idCount++;
    props.setTodos([
      ...props.todos,
      { id: idCount, text: props.inputValue, complete: false },
    ]);
    props.setInputValue("");
  };

  return (
    <form className="main__form">
      <Input
        onChange={(event) => props.setInputValue(event.target.value)}
        value={props.inputValue}
        type="text"
        placeholder="Введіть завдання..."
      />
      <Button onClick={handleClick}>
        Додати <img className="button__img" src={buttonIcon} alt="Aded icon" />
      </Button>
    </form>
  );
};

export default Form;
