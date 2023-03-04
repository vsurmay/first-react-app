import styled from "styled-components";

const Button = styled.button`
  font-family: ${(props) => (props.list ? "Quando" : "Poppins")};
  font-style: normal;
  font-weight: ${(props) => (props.list ? "400" : "700")};
  font-size: ${(props) => (props.list ? "16px" : "24px")};
  padding: ${(props) => (props.list ? "15px 80px" : "25px 40px")};
  background: #f8a607;
  border-radius: ${(props) => (props.list ? "0" : "10px")};
  margin-bottom: ${(props) => (props.list ? "-7px" : "0")};
  color: #ffffff;
  cursor: pointer;
  transition: all 0.5s;
  width: ${(props) => (props.list ? "100%" : "unset")};

  &:hover {
    background: #f86507;
  }
`;

export default Button;
