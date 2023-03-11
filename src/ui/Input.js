import styled from "styled-components";
import variables from "../scss/vars.scss";

const Input = styled.input`
  width: 100%;
  padding: 16px;
  background: #262626;
  border: 1px solid #0d0d0d;
  border-radius: 8px;
  color: ${variables.mainTextColor};
  font-size: 16px;
  transition: all 0.3s ease;

  &:placeholder {
    font-size: 16px;
    color: ${variables.secondlyTextColor};
  }

  &:focus {
    border: 1px solid #5e60ce;
  }
`;

export default Input;
