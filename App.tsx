import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Home from "./src/Pages/Home";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/theme";
import Login from "./src/Pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const [themeToggle, setThemeToggle] = useState(false);

  const changeTheme = () => {
    setThemeToggle(!themeToggle);
  };

  const customTheme = themeToggle ? theme?.dark : theme?.light;
  const Tab = createBottomTabNavigator();
  return (
    <PaperProvider>
      <ThemeProvider theme={customTheme}>
        <StatusBar style={themeToggle ? "light" : "dark"} />
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}
