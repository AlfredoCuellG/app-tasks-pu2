import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Login from "./pages/LoginPage/Login.page";
import Home from "./pages/HomePage/Home.page";
import RegisterUser from "./pages/RegisterPage/Register.page";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <Login {...props} />}  
        </Stack.Screen>
        <Stack.Screen name="SignUp" options={{headerShown: false}}>
          {(props) => <RegisterUser {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {(props) => <Home {...props}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
