import React, { useState, useContext } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-paper";
import { Container, Title } from "./style";
import { ThemeChange } from "../../Context/themeChange";
export default function Header() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const { changeTheme, setChangeTheme } = useContext(ThemeChange);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setChangeTheme(!changeTheme);
    console.log("header on");
    console.log(changeTheme);
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
