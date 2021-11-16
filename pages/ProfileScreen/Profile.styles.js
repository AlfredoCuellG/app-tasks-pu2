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
