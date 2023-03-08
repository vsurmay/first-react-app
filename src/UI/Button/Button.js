import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.click ? "rgb(176, 176, 255)" : "white"};

  background-color: ${(props) => (props.play ? "rgb(83 255 74)" : "white")};
  padding: 10px 20px;
  font-size: 20px;
  border: 1px solid rgb(0, 0, 165);
  border-radius: 10px;
  color: rgb(67, 67, 67);
  transition: all 0.5s;
  cursor: pointer;
  width: 105px;
  margin-bottom: 10px;

  &:hover {
    background-color: rgb(176, 176, 255);
  }
`;

export default Button;
