import React from "react";
import { Container, Title, IconContent } from "./style";
import { Button, Checkbox } from "react-native-paper";
import { useState } from "react";
type Props = {
  title: string;
};
export default function TaskItem({ title }: Props) {
  const [checked, setChecked] = useState(false);
  return (
    <Container checked={checked}>
      <Title checked={checked}>{title}</Title>
      <IconContent>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Button icon="delete"> </Button>
      </IconContent>
    </Container>
  );
}
