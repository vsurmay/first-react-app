import styled from "styled-components";
import variables from "../../scss/_vars.scss";

const Text = styled.p`
  font-family: ${(props) =>
    props.recipe ? variables.fontMain : variables.fontSecondly};
  background: ${(props) => (props.recipe ? variables.primaryColor : "inherit")};
  padding: ${(props) => (props.recipe ? "40px" : "0")};
  margin-bottom: ${(props) => (props.recipe ? "30px" : "0")};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) =>
    props.recipe ? "rgba(0, 0, 0, 0.72)" : "rgba(0, 0, 0, 0.5)"};
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

export default Text;
