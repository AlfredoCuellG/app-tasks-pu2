import { useNavigation } from "@react-navigation/core";
import React, {useState, useEffect} from "react";
import { Alert } from "react-native";
import { auth } from "../../firebase";
import {ViewContainer, BtnContainerPhoto, StyledPhoto, 
  StyledTextGeneral, StyledButton, StyledBtnText} from './Profile.styles'; 
import * as ImagePicker from 'expo-image-picker';

const Profile = (props) => {
  const navigation = useNavigation();
  const photo = props.photo;
  const setPhoto = props.setPhoto; 

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 5],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  
  return (
    <ViewContainer>
      <BtnContainerPhoto onPress={pickImage}>
        <StyledPhoto source={{uri: photo}}/>
      </BtnContainerPhoto>
      <StyledTextGeneral>Email: {auth.currentUser?.email}</StyledTextGeneral>
      <StyledButton onPress={handleSignOut}>
        <StyledBtnText>Sign Out</StyledBtnText>
      </StyledButton>
    </ViewContainer>
  );
};
export default Profile;

