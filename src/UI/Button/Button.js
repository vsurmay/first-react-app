import styled from "styled-components";
import variables from "../../scss/_vars.scss";

const Button = styled.button`
  font-family: ${(props) =>
    props.listButton ? variables.fontMain : variables.fontSecondly};
  font-style: normal;
  font-weight: ${(props) => (props.listButton || props.back ? "400" : "700")};
  font-size: ${(props) => (props.listButton ? "16px" : "24px")};
  padding: ${(props) =>
    props.listButton || props.back ? "15px 80px" : "25px 40px"};
  background: ${(props) =>
    props.back ? variables.secondlyColor : variables.primaryColor};
  border-radius: ${(props) => (props.listButton || props.back ? "0" : "10px")};
  margin-bottom: ${(props) => (props.listButton ? "-7px" : "0")};
  color: ${(props) => (props.back ? "#FDFDFD" : "#ffffff")};
  cursor: pointer;
  transition: all 0.5s;
  width: ${(props) => (props.listButton ? "100%" : "unset")};
  display: ${(props) => (props.back ? "block" : "inline-block")};
  margin-left: ${(props) => (props.back ? "auto" : "0")};

  &:hover {
    background: ${(props) =>
      props.back ? "rgba(255, 106, 83, 0.6)" : "#f86507"};
  }
`;

export default Button;
