import styled from "styled-components/native";

export const Container = styled.View<{ checked: Boolean }>`
  flex: 1;
  flex-direction: row;
  margin: 10px 20px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${({ checked }) => (checked ? "#F0541D" : "white")};
  align-items: center;
`;
export const Title = styled.Text<{ checked: Boolean }>`
  flex: 1;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  color: black;
  font-size: 15px;
`;
export const IconContent = styled.View`
  justify-content: center;
`;
