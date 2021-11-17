import { useNavigation } from "@react-navigation/core";
import React, {useState, useEffect} from "react";
import { Modal, Alert } from "react-native";
import { auth, storage, db } from "../../firebase";
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
        const { statusGallery } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const { statusCamera } = await ImagePicker.requestCameraPermissionsAsync(); 
        if (!statusGallery == 'granted' || !statusCamera == 'granted') {
          alert('Sorry, we need permissions to access gallery and camera for this to work.');
        }
      }
    })();
    loadImage(); 
  }, []);

  //Función para subir la imagen al storage. 
  const uploadImage = (uri) => {
    return new Promise((resolve, reject) => {
     let xhr = new XMLHttpRequest(); 
      xhr.onerror = reject; 
      xhr.onreadystatechange = () => {
       if(xhr.readyState === 4){
         resolve(xhr.response); 
       }
     };
     xhr.open("GET", uri); 
     xhr.responseType = "blob"; 
     xhr.send(); 
    });
  }

  //Función para cargar la imagen
  const loadImage = async () => {
    const nameImg = auth.currentUser?.email; 
    storage.ref(`images/${nameImg}`).getDownloadURL().then(resolve => {
      console.log(resolve); 
      setPhoto(resolve); 
    }).catch(error => {
      console.log(error); 
    });
  }

  const pickFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 5],
      quality: 1,
    });

    console.log("Gallery photo");
    console.log(result);

    if (!result.cancelled) {
      setPhoto(result.uri);

      const imageUri = result.uri; 
      let nameImg = auth.currentUser?.email; 

      uploadImage(imageUri)
        .then(resolve => {
          let ref = storage.ref().child(`images/${nameImg}`); 
          ref.put(resolve).then(resolve => {
            console.log("Imagen subida correctamente"); 
          }).catch(error => {
            console.log("Error al subir la imagen")
            console.log(error); 
          });
        }).catch(error => {
          console.log(error); 
      });
    }
    setModalVisible(!modalVisible); 
  };

  const pickFromCamera = async ()=>{
    let data =  await ImagePicker.launchCameraAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[1,1],
      quality:0.5
    });
    
    console.log("Camera photo");
    console.log(data);

    if(!data.cancelled){
      setPhoto(data.uri); 

      const imageUri = data.uri; 
      let nameImg = auth.currentUser?.email; 

      uploadImage(imageUri)
        .then(resolve => {
          let ref = storage.ref().child(`images/${nameImg}`); 
          ref.put(resolve).then(resolve => {
            console.log("Imagen subida correctamente"); 
          }).catch(error => {
            console.log("Error al subir la imagen")
            console.log(error); 
          });
        }).catch(error => {
          console.log(error); 
      });
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
              <ModalButton onPress={pickFromGallery}>
                <ModalTextBtn>Choose gallery photo</ModalTextBtn>
              </ModalButton>
              <ModalButton onPress={pickFromCamera}>
                <ModalTextBtn>Take a picture</ModalTextBtn>
              </ModalButton>
              <ModalButton onPress={()=>setModalVisible(!modalVisible)}>
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

