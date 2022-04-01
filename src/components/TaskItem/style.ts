import styled from "styled-components/native";

export const Container = styled.View<{ checked: Boolean }>`
  margin: 10px 20px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ checked }) => (checked ? "#F0541D" : "white")};
`;
export const Title = styled.Text<{ checked: Boolean }>`
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  color: black;
  font-size: 15px;
`;
