import "./Test.css";
import React from "react";

class Test extends React.Component {
  // Основні компоненти життєвого циклу
  // цей метод викликається після того як наша компонент було розміщено на сторінці
  componentDidMount() {
    console.log(componentDidMount);
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
