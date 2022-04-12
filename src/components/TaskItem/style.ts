import styled from "styled-components/native";

export const Container = styled.View<{ checked: Boolean }>`
  flex: 1;
  flex-direction: row;
  border-radius: 10px;
  margin: 10px 10px;
  padding: 14px;
  background-color: ${({ checked }) => (checked ? "#F0541D" : "#d0d0d0")};
  align-items: center;
`;
export const Title = styled.Text<{ checked: Boolean }>`
  flex: 1;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  color: ${({ theme }) => theme.COLOR.ICONS};
  font-size: 15px;
`;
export const IconContent = styled.View`
  flex-direction: row;
`;
