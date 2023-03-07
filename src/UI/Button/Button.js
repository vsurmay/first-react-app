import styled from "styled-components";
import variables from "../../scss/_vars.scss";

const Button = styled.button`
  font-family: ${(props) =>
    props.listItem ? variables.fontMain : variables.fontSecondly};
  font-style: normal;
  font-weight: ${(props) => (props.listItem || props.disabled ? "400" : "700")};
  font-size: ${(props) => (props.listItem ? "16px" : "24px")};
  padding: ${(props) =>
    props.listItem || props.disabled ? "15px 80px" : "25px 40px"};
  background: ${(props) =>
    props.disabled ? variables.secondlyColor : variables.primaryColor};
  border-radius: ${(props) =>
    props.listItem || props.disabled ? "0" : "10px"};
  margin-bottom: ${(props) => (props.listItem ? "-7px" : "0")};
  color: ${(props) => (props.disabled ? "#FDFDFD" : "#ffffff")};
  cursor: pointer;
  transition: all 0.5s;
  width: ${(props) => (props.listItem ? "100%" : "unset")};
  display: ${(props) => (props.disabled ? "block" : "inline-block")};
  margin-left: ${(props) => (props.disabled ? "auto" : "0")};

  &:hover {
    background: ${(props) =>
      props.disabled ? "rgba(255, 106, 83, 0.6)" : "#f86507"};
  }
`;

export default Button;
