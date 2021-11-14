import React, {useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const RegisterUser = (props) => {  
  const name = props.name; 
  const setName = props.setName; 
  const lastname = props.lastname; 
  const setLastname = props.setLastname; 
  const email = props.email; 
  const setEmail = props.setEmail; 
  const pwd = props.pwd; 
  const setPwd = props.setPwd; 
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="LastName"
          value={lastname}
          onChangeText={(text) => setLastname(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={pwd}
          onChangeText={(text) => setPwd(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      {/* We have 2 buttons that will execute the functions above) */}
      {/* Tenemos 2 botones que ejecutarán las funciones anteriores) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterUser;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#d6e0ff",
    },
    inputContainer: {
      width: "80%",
    },
    input: {
      backgroundColor: "#ffffff",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 15,
      borderWidth: 2, 
      borderColor: "#b32a00", 
    },
    buttonContainer: {
      width: "70%",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 40,
    },
    button: {
      backgroundColor: "#0782F9",
      width: "100%",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    buttonOutline: {
      backgroundColor: "white",
      marginTop: 5,
      borderColor: "#0782F9",
      borderWidth: 2,
    },
    buttonText: {
      color: "white",
      fontWeight: "700",
      fontSize: 16,
    },
    buttonOutlineText: {
      color: "#0782F9",
      fontWeight: "700",
      fontSize: 16,
    },
    logo: {
      width: 190,
      height: 205,
      marginLeft: 65,
      marginBottom: 5,
    },
  });
  