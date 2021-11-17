import styled from "styled-components";

export const ViewContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #E2E2E2;
`;

export const ViewInputButton = styled.View`
    position: absolute;
    left: 0%;
    top: 0%;
    flex: 1;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
`;

export const StyledInput = styled.TextInput`
    background-color: #ffffff;
    padding: 8px;
    border-radius: 10px;
    margin-top: 7px;
    width: 90%;
    height: 50%;
    border: 2px solid #000000;
`;

export const StyledBtnAdd = styled.TouchableOpacity`
    background-color: ${({color}) => color ?? "#0782F9"};
    width: 80%;
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    margin-top: 10px;
    margin: 10px;
`;

export const StyledTextBtn = styled.Text`
    color: ${({color}) => color ?? "#fff"};
    font-weight: bold;
    font-size: 16px;
`;

export const StyledScrollView = styled.ScrollView`
    padding: 0;
    margin: 0;
    background-color: transparent;
    margin-top: 160px;
    width: 95%;
    margin-bottom: 5px;
`;

export const ViewTasksAdd = styled.View`
    width: 90%;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    background-color: ${({color}) => color ?? "#005070"};
    padding: 10px;
    margin-left: 20px;
    border-radius: 10px;
    margin-top: 9px;
    margin-bottom: 5px;
    border: 1px solid #56CFFD;
`;

export const TextTask = styled.Text`
    color: ${({color}) => color ?? "#ffffff"};
    font-size: 20px;
    margin-bottom: 50px;
    margin-left: 5px;
    margin-right: 5px;
`;

export const TextTaskTachado = styled.Text`
    color: ${({color}) => color ?? "#ABABAB"};
    font-size: 20px;
    margin-bottom: 50px;
    margin-left: 5px;
    margin-right: 5px;
    text-decoration: line-through;
`;

export const ViewTaskBtns = styled.View`
    position: absolute;
    bottom: 0%;
    flex-direction: column;
    flex: 1;
    width: 100%;
    margin-left: 10px;
    height: 60px;
`;

export const TextDate = styled.Text`
    color: ${({color}) => color ?? "#C4EFFF"};
    font-size: 14px;
    margin-left: 30px;
    margin-top: 20px;
    font-weight: bold;
`;

export const ButtonsTaskDone = styled.TouchableOpacity`
    background-color: ${({color}) => color ?? "#7DFF54"};
    border-radius: 50px;
    border: 2px solid #56CFFD;
    width: 25px;
    height: 25px;
    bottom: 38%;
    margin-left: 220px;

`;

export const ButtonsTaskDelete = styled.TouchableOpacity`
    background-color: ${({color}) => color ?? "#FF5454"};
    border-radius: 50px;
    border: 2px solid #56CFFD;
    width: 25px;
    height: 25px;
    bottom: 78%;
    margin-left: 270px;
`;

export const TextBtnTasks = styled.Text`
    color: ${({color}) => color ?? "#000000"};
    font-size: 14px;
    text-align: center;
`;

export const MessageScroll = styled.Text`
    color: ${({color}) => color ?? "#000"};
    font-weight: bold;
    font-size: 16px;
    text-align: center;
`;