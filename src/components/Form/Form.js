import React from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import buttonIcon from "../../icon/button-icon.svg";
import "./Form.scss";

const Form = () => {
  return (
    <form className="main__form">
      <Input type="text" placeholder="Введіть завдання..." />
      <Button>
        Додати <img className="button__img" src={buttonIcon} alt="Aded icon" />
      </Button>
    </form>
  );
};

export default Form;
