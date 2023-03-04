import styled from "styled-components";

const Button = styled.button`
  font-family: "Poppins", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  padding: 25px 40px;
  background: #f8a607;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background: #f86507;
  }
`;

export default Button;
