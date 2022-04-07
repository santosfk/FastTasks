import React, { useState } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-paper";
import { Container, Title } from "./style";

type Props = {
  changeTheme: () => void;
};

export default function Header({ changeTheme }: Props) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    changeTheme();
  };
  return (
    <Container>
      <Title>FastTasks</Title>
      <Text>
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          color="purple"
        />
      </Text>
    </Container>
  );
}
