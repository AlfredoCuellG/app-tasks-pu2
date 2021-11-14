import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {ViewContainer, ViewInputButton, StyledInput, StyledBtnAdd, 
  StyledTextBtn, StyledScrollView, ViewTasksAdd, TextTask, ViewTaskBtns,  
  TextDate, ButtonsTaskDone, ButtonsTaskDelete, TextBtnTasks} from "./Tasks.styles"; 

const TasksScreen = () => {
  return (
    <ViewContainer>
      <ViewInputButton>
        <StyledInput
        placeholder="Add tasks here"
        />
        <StyledBtnAdd>
          <StyledTextBtn>Add task</StyledTextBtn>
        </StyledBtnAdd>
      </ViewInputButton>
      <StyledScrollView>
        {/* DESDE AQUÍ COMIENZA UNA NUEVA TAREA */}
        <ViewTasksAdd>
          <TextTask>Estudiar para todo bro</TextTask>
          <ViewTaskBtns>
            <TextDate>14 de septiembre de 2021</TextDate>
            <ButtonsTaskDone>
              <TextBtnTasks>✔</TextBtnTasks>
            </ButtonsTaskDone>
            <ButtonsTaskDelete>
              <TextBtnTasks>✖</TextBtnTasks>
            </ButtonsTaskDelete>
          </ViewTaskBtns>
        </ViewTasksAdd>
        {/* DESDE AQUÍ COMIENZA UNA NUEVA TAREA */}
        <ViewTasksAdd>
          <TextTask>Hacer la tarea de DMI vamos a agrandar el texto para ver que onda jaja que loco ya la hice más grande</TextTask>
          <ViewTaskBtns>
            <TextDate>14-nov-2021</TextDate>
            <ButtonsTaskDone>
              <TextBtnTasks>✔</TextBtnTasks>
            </ButtonsTaskDone>
            <ButtonsTaskDelete>
              <TextBtnTasks>✖</TextBtnTasks>
            </ButtonsTaskDelete>
          </ViewTaskBtns>
        </ViewTasksAdd>
      </StyledScrollView>
    </ViewContainer>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    textStyle: {
        textAlign: "center",
        fontSize: 18,
    },
});    