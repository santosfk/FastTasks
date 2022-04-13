import React, { useState } from "react";
import Home from "./src/Pages/Home";
import { Provider as PaperProvider } from "react-native-paper";
import Login from "./src/Pages/Login";
import Signin from "./src/Pages/Signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Tab = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Signin" component={Signin} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
