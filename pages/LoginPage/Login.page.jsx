import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {KeyboardView, StyledView, StyledImage, StyledInput, 
  StyledViewBtns, StyledButton, StyledButtonSignUp, StyledTextBtn, StyledText} from './Login.styles'; 

import { auth } from "../../firebase";
import logo from '../../media/images/logo.png'; 
import RegisterUser from '../RegisterPage/Register.page'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [registerVisible, setRegisterVisible] = useState(false); 

  const navigation = useNavigation();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsuscribe;
  }, []);
  
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, pwd)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const goToRegister = () => {
    setRegisterVisible(true); 
  }

  return (
    registerVisible ? (
      <RegisterUser 
        email={email}
        setEmail={setEmail}
        pwd={pwd}
        setPwd={setPwd} />
    ) : (
    <KeyboardView behavior="height">
      <StyledView>
        <StyledImage source={logo} />
        <StyledInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <StyledInput
          placeholder="Password"
          value={pwd}
          onChangeText={(text) => setPwd(text)}
          secureTextEntry
        />
      </StyledView>
      <StyledViewBtns>
        <StyledButton onPress={handleLogin}>
          <StyledTextBtn>Login</StyledTextBtn>
        </StyledButton>
        <StyledText>If you don't have an account, register here:</StyledText>
        <StyledButtonSignUp 
          onPress={goToRegister}>
          <StyledTextBtn color={"#0782F9"}>Go to sign up</StyledTextBtn>
        </StyledButtonSignUp>
      </StyledViewBtns>
    </KeyboardView>
    )
  );
};

export default Login; 
