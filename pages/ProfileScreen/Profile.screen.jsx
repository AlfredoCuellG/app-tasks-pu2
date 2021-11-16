import { useNavigation } from "@react-navigation/core";
import React, {useState, useEffect} from "react";
import { Modal, Alert } from "react-native";
import { auth } from "../../firebase";
import {ViewContainer, BtnContainerPhoto, StyledPhoto, 
  StyledTextGeneral, StyledButton, StyledBtnText,
  ModalViewAll, ModalView, ModalTextTitle, ModalButton, ModalTextBtn } from './Profile.styles'; 
import * as ImagePicker from 'expo-image-picker';

const Profile = (props) => {
  const navigation = useNavigation();
  const photo = props.photo;
  const setPhoto = props.setPhoto; 

  const [modalVisible, setModalVisible] = useState(false);

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
    setModalVisible(!modalVisible); 
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
      <BtnContainerPhoto onPress={()=>setModalVisible(true)}>
        <StyledPhoto source={{uri: photo}}/>
      </BtnContainerPhoto>
      <StyledTextGeneral>Email: {auth.currentUser?.email}</StyledTextGeneral>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }} >
          <ModalViewAll>
            <ModalView>
              <ModalTextTitle>Choose an option:</ModalTextTitle>
              <ModalButton onPress={pickImage}>
                <ModalTextBtn>Choose gallery photo</ModalTextBtn>
              </ModalButton>
              <ModalButton onPress={() => setModalVisible(!modalVisible)}>
                <ModalTextBtn>Take a picture</ModalTextBtn>
              </ModalButton>
              <ModalButton onPress={() => setModalVisible(!modalVisible)}>
                <ModalTextBtn>Cancel</ModalTextBtn>
              </ModalButton>
            </ModalView>
          </ModalViewAll>
      </Modal>
      <StyledButton onPress={handleSignOut}>
        <StyledBtnText>Sign Out</StyledBtnText>
      </StyledButton>
    </ViewContainer>
  );
};
export default Profile;

