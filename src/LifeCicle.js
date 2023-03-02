import "./LifeCicle.css";
import React from "react";

class Test extends React.Component {
  // Основні компоненти життєвого циклу
  // 1) цей метод викликається після того як наша компонент було розміщено на сторінці
  // компонент змонтовано
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 2) цей метод викликається при оновленні компнента
  // компонент оновлено
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // 3) цей метод викликається при знищенні компонента
  // компонент буде демонтовано
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // 4) цей метод дозволяє виначити чи потрібно нам оновлювати компонент
  // він повертає true | false на основі стану
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
  }

  // перші 4 метода є найбільш важливі
  // далі ідуть допоможні вузькогалузеві методи

  // 5) цей метод викликається перед оновленням компоненти
  // та дозволяє встановити новий стан на основі нових властиостей
  // міняє стан компонети не так як треба
  // метод устарівший
  // getDriverStateFromProps() {
  //   console.log('getDriverStateFromProps')
  // }

  // 6) цей метод дозволяє зберегти значення перед оновенням компонента
  // які можуть бути використані після оновлення
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }

  // 7) цей метод викликається в тому разі коли в компоненті виникає якась помилка
  // і цей метод ловить помилку

  componentDidCatch() {
    console.log("componentDidCatch");
  }

  render() {
    return (
      <div className="test">
        <div className="test1">hey i class component</div>
      </div>
    );
  }
}

export default Test;
