import styled from "styled-components";

const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: ${(props) => (props.less ? "400" : "700")};
  font-size: ${(props) => (props.less ? "24px" : "32px")};
  line-height: ${(props) => (props.less ? "32px" : "48px")};
  color: #000000;
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

export default Title;
