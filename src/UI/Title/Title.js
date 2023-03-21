import styled from "styled-components";
import variables from "../../scss/_vars.scss";

const Title = styled.h3`
  height: 64px;
  font-family: ${(props) =>
    props.recipe ? variables.fontMain : variables.fontSecondly};
  font-weight: ${(props) => (props.less || props.recipe ? "400" : "700")};
  font-size: ${(props) => (props.less || props.recipe ? "24px" : "32px")};
  line-height: ${(props) => (props.less ? "32px" : "48px")};
  color: #000000;
  text-align: ${(props) => (props.center ? "center" : "left")};
  margin-bottom: ${(props) => (props.recipe ? "20px" : "0px")};
`;

export default Title;
