import styled from "styled-components";

export const ViewContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({color}) => color ?? "#E2E2E2"};
`;

export const BtnContainerPhoto = styled.TouchableOpacity`
    background-color: #E2E2E2;
`;

export const StyledPhoto = styled.Image`
    width: 190;
    height: 190;
    border-radius: 100px;
    border: 2px solid #000731;
`;

export const StyledTextGeneral = styled.Text`
    color: ${({color}) => color ?? "#000000"};
    font-size: 20px;
    margin-top: 20px;
`;

export const StyledButton = styled.TouchableOpacity`
    background-color: ${({color}) => color ?? "#0782F9"};
    width: 60%;
    padding: 15px;
    border-radius: 10px;
    align-items: center;
    margin-top: 35px;
`;

export const StyledBtnText = styled.Text`
    color: ${({color}) => color ?? "#ffffff"};
    font-weight: bold;
    font-size: 16px;
`;

//Componentes de la vista Modal 
export const ModalViewAll = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    margin: 52px;
    margin-left: 0px;
    flex-direction: column;
    background-color: rgba(52, 52, 52, 0.6);
`;

export const ModalView = styled.View`
    width: 95%;
    background-color: #005070;
    border-radius: 20px;
    padding: 15px;
    align-items: center;
    margin-top: 119%;
`;

export const ModalTextTitle = styled.Text`
    color: ${({color}) => color ?? "#ffffff"};
    font-weight: bold;
    font-size: 25px;
`;

export const ModalButton = styled.TouchableOpacity`
    background-color: ${({color}) => color ?? "#BAECFF"};
    width: 75%;
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    margin-top: 20px;
    border: 2px solid #00B7FF;
`;

export const ModalTextBtn = styled.Text`
    color: ${({color}) => color ?? "#000000"};
    font-size: 16px;
    font-weight: bold;
`;