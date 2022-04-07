import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLOR.DIV};
  position: absolute;
  top: 0;
  height: 120px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
