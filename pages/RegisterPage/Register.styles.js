import styled from "styled-components";

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({color}) => color ?? "#002E6D"};
`;

export const ViewInputs = styled.View`
    width: 80%;
`;

export const StyledTextTitle = styled.Text`
    color: ${({color}) => color ?? "#07B3F9"};
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`;

export const StyledInput = styled.TextInput`
    background-color: #ffffff;
    padding: 13px;
    border-radius: 10px;
    margin-top: 15px;
`;

export const ViewButtons = styled.View`
    width: 70%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`;

export const StyledButton = styled.TouchableOpacity`
    background-color: ${({color}) => color ?? "#07B3F9"};
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    align-items: center;
    margin-top: 14px;
`;

export const StyledTextBtn = styled.Text`
    color: ${({color}) => color ?? "#fff"};
    font-weight: 700;
    font-size: 16px;
`;

export const StyledText = styled.Text`
    color: ${({color}) => color ?? "#000000"};
    font-size: 16px;
`;
