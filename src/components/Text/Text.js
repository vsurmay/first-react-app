import styled from "styled-components";

const Text = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: rgba(0, 0, 0, 0.5);
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

export default Text;
