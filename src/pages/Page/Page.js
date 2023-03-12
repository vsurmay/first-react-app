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
  const [checkedTask, setCheckedTask] = useState(0);

  const descriptionTitle = "У вас ще немає зареєстрованих завдань";
  const descriptionSubTitle = "Створюйте завдання та впорядковуйте свої справи";

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
          <About todos={todos} checkedTask={checkedTask} />

          {todos.length ? (
            <ul className="todos__list">
              {todos.map((el, index) => (
                <Task
                  key={index}
                  info={el}
                  setTodos={setTodos}
                  todos={todos}
                  setCheckedTask={setCheckedTask}
                />
              ))}
            </ul>
          ) : (
            <Description
              imgUrl={descriptionIcon}
              title={descriptionTitle}
              subTitle={descriptionSubTitle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
