import styled from "styled-components";
import variables from "../scss/vars.scss";

const Button = styled.button`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  background: ${variables.primaryColor};
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  color: ${variables.mainTextColor};
  transition: all 0.3s ease;

  &:hover {
    background: #4ea8de;
  }

  .button__img {
    margin-top: 2px;
  }
`;

export default Button;
