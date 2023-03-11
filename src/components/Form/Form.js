import React from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import buttonIcon from "../../icon/button-icon.svg";
import "./Form.scss";

let idCount = 0;

const Form = (props) => {
  return (
    <form className="main__form">
      <Input
        onChange={(event) => props.setInputValue(event.target.value)}
        type="text"
        placeholder="Введіть завдання..."
      />
      <Button
        onClick={(event) => {
          idCount++;
          event.preventDefault();
          props.setTodos([
            ...props.todos,
            { id: idCount, text: props.inputValue, complete: false },
          ]);
        }}
      >
        Додати <img className="button__img" src={buttonIcon} alt="Aded icon" />
      </Button>
    </form>
  );
};

export default Form;
