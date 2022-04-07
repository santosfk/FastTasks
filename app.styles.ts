import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
`;
export const ListWrap = styled.View`
  margin-top: -110%;
`;
export const InputContent = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  z-index: 2;
  flex: 1;
  bottom: 0;
`;
export const TextTask = styled.TextInput`
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLOR.DIV};
  margin: 10px 10px;
`;
