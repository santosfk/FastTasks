import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./src/Pages/Home";
import { Provider as PaperProvider } from "react-native-paper";
import Login from "./src/Pages/Login";
import Signin from "./src/Pages/Signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ThemeChangeContext from "./src/Context/themeChange";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeChangeContext>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signin" component={Signin} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeChangeContext>
  );
}
