import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {KeyboardView, StyledView, StyledImage, StyledInput, 
  StyledViewBtns, StyledButton, StyledTextBtn} from './Login.styles'; 

import { auth } from "../../firebase";
import logo from '../../media/images/logo.png'; 
import RegisterUser from '../RegisterPage/Register.page'; 

const Login = () => {
  const [name, setName] = useState(""); 
  const [lastname, setLastname] = useState(""); 
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [tasks, setTasks] = useState([]); 

  const navigation = useNavigation();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
    return unsuscribe;
  }, []);
  
  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, pwd)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
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

  return (
    <KeyboardView behavior="padding">
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
        <StyledButton 
          onPress={handleSignup}
          color={"#fff"}
          colorBorder={"#0782F9"}
          >
          <StyledTextBtn color={"#0782F9"}>Sign Up</StyledTextBtn>
          {/*{() => <RegisterUser 
          name={name}
          setName={setName}
          lastname={lastname}
          setLastname={setLastname}
          email={email}
          setEmail={setEmail}
          pwd={pwd}
          setPwd={setPwd}/>}*/}
        </StyledButton>
      </StyledViewBtns>
    </KeyboardView>
  );
};

export default Login; 
