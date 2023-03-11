import "./Page.scss";
import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import logoIcon from "../../icon/logo.svg";
import Form from "../../components/Form/Form";
import About from "../../components/About/About";
import Task from "../../components/Task/Task";
import Description from "../../components/Description/Description";
import descriptionIcon from "../../icon/description.svg";

const Page = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  console.log(todos);

  return (
    <div className="page">
      <div className="page__header">
        <div className="container">
          <Logo alt="Logo" url={logoIcon} />
        </div>
      </div>
      <div className="page__main">
        <div className="container">
          <Form
            inputValue={inputValue}
            setInputValue={setInputValue}
            setTodos={setTodos}
            todos={todos}
          />
          <About />
          {todos.length ? (
            <ul className="todos__list">
              {todos.map((el, index) => (
                <Task key={index} text={el.text} />
              ))}
            </ul>
          ) : (
            <Description
              imgUrl={descriptionIcon}
              title="У вас ще немає зареєстрованих завдань"
              subTitle="Створюйте завдання та впорядковуйте свої справи"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
