import React from "react";
import { View, Text } from "react-native";
import { Container, Title } from "./style";
import { Checkbox } from "react-native-paper";
import { useState } from "react";
type Props = {
  title: string;
};
export default function TaskItem({ title }: Props) {
  const [checked, setChecked] = useState(false);
  return (
    <Container checked={checked}>
      <Title checked={checked}>{title}</Title>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </Container>
  );
}
