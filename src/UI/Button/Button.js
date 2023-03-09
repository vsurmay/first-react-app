import styled from "styled-components";
import "./Button.scss";

const Button = styled.button`
  background-color: ${(props) =>
    props.click ? "rgb(176, 176, 255)" : "white"};

  background-color: ${(props) => (props.play ? "rgb(0 206 205)" : "white")};
  padding: 10px 20px;
  font-size: 20px;
  border: ${(props) =>
    props.play ? "3px solid rgb(0 206 205)" : "3px solid #eee"};
  color: ${(props) => (props.play ? "black" : "rgb(67, 67, 67)")};
  transition: all 0.5s;
  cursor: pointer;
  width: ${(props) => (props.play ? "100%" : "105px")};
  margin-bottom: 10px;

  // &:hover {
  //   border: 3px solid rgb(0 206 205);
  //   color: ${(props) => (props.play ? "black" : "rgb(0 206 205)")};
  // }
`;

export default Button;
