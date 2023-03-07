import "./List.scss";
import ListItem from "../../components/ListItem/ListItem";
import { useState } from "react";

// тестовий варіант
import data from "../../data";

// робимо потрібний нам масив лише з обєктів
const newData = [];
const dataItemsArray = data.map((el) =>
  el.items.forEach((el) => newData.push(el))
);

function List(props) {
  const [value, setValue] = useState("");

  // value - дані які були надісані з кнопки надсилаємо їх наверх до App
  props.setDataItem(value);

  return (
    <div className="list-page">
      <section className="section__list">
        <div className="container-less">
          <div className="list__wrapper">
            {newData.map((el, index) => (
              <ListItem
                value={value}
                setValue={setValue}
                key={index}
                data={el}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
