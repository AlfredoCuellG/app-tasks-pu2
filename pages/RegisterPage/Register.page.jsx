import React, {useState, useEffect} from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import {KeyboardView, ViewInputs, StyledTextTitle, StyledInput, ViewButtons, 
  StyledButton, StyledTextBtn, StyledText} from "./Register.styles"; 
import { Alert, StatusBar } from "react-native";

import { auth, db } from "../../firebase";
import { getDatabase, ref, onValue } from 'firebase/database';
import Login from "../LoginPage/Login.page";

const RegisterUser = (props) => {  
  const [name, setName] = useState(""); 
  const [lastname, setLastname] = useState(""); 
  const email = props.email; 
  const setEmail = props.setEmail; 
  const pwd = props.pwd; 
  const setPwd = props.setPwd; 

  const idUser = auth.uid; 

  const [loginVisible, setLoginVisible] = useState(false); 
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

  const returnToLogin = () => {
    setLoginVisible(true); 
  }

  const crearItem = () => {
    try {
      if (textTask.length > 0) {
        const todoRef = db.ref("users/"+auth.currentUser?.uid+"/tasks");
        item.Titulo = textTask;
        todoRef.push(item);
        console.log(item);
        listarItems();
        setTextTask(null);
      } else {
        alert("Ingresar un título");
      }
    } catch (error) {
      alert("Ingresar un título");
    }
  };

  function addNewUser() {
    const reference = db.ref("/data/users");
    if(name == "" || lastname == "" || email == "" || pwd == ""){
      Alert.alert(
        "Warning.",
        "Some form field is empty.",
        [
          { text:"Ok", onPress:()=>console.log("Ok press")}
        ]
        ); 
    }else{
      handleSignup();
      try{
        reference.push({
          nameUser: name,
          lastnameUser: lastname,
          emailUser: email,
          pwdUser: pwd,
        });
      }catch(error){
        console.log(error);
        Alert.alert(error.message); 
      }
    }
  }

  const comprobacion = () => {
    console.log("Nom: "+name+" Ape: "+lastname+" Email: "+email+" Pwd: "+pwd); 
    setName((current) => current = ""); 
    setLastname((current) => current = ""); 
    setEmail((current) => current = ""); 
    setPwd((current) => current = ""); 
  }
  
  return (
    loginVisible ? (
      <Login />
    ) : (
    <KeyboardView behavior="height">
      <ViewInputs>
        <StyledTextTitle>Add new user</StyledTextTitle>
        <StyledInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <StyledInput
          placeholder="LastName"
          value={lastname}
          onChangeText={(text) => setLastname(text)}
        />
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
      </ViewInputs>
      {/* We have 2 buttons that will execute the functions above) */}
      {/* Tenemos 2 botones que ejecutarán las funciones anteriores) */}
      <ViewButtons>
        <StyledButton onPress={addNewUser} >
          <StyledTextBtn>Sign Up</StyledTextBtn>
        </StyledButton>
        <StyledButton onPress={returnToLogin} color={"#fff"}>
          <StyledTextBtn color={"#07B3F9"}>Back to login</StyledTextBtn>
        </StyledButton>
      </ViewButtons>
      <StatusBar />
    </KeyboardView>
    )
  );
};

export default RegisterUser;
