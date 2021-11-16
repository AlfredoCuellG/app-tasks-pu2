import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {ViewContainer, ViewInputButton, StyledInput, StyledBtnAdd, 
  StyledTextBtn, StyledScrollView, ViewTasksAdd, TextTask, ViewTaskBtns,  
  TextDate, ButtonsTaskDone, ButtonsTaskDelete, TextBtnTasks} from "./Tasks.styles"; 

const TasksScreen = (props) => {
  const tasks = props.tasks; 
  const setTasks = props.setTasks; 
  const [textTask, setTextTask] = useState(""); 
  //const [tasks, setTasks] = useState([]); 

  const theTasks = tasks.map((textoo, id) => {
    return(    
      <ViewTasksAdd key={id}>
          <TextTask>{textoo}</TextTask>
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
    )
  });
  

  const _saveTask = () => {
    setTasks((currentTasks) => {
      return [textTask, ...currentTasks]; 
    });
    setTextTask((current) => current = ""); 
  }

  return (
    <ViewContainer>
      <ViewInputButton>
        <StyledInput
          placeholder="Add tasks here"
          value={textTask}
          onChangeText={(text) => setTextTask(text)}
        />
        <StyledBtnAdd onPress={_saveTask}>
          <StyledTextBtn>Add task</StyledTextBtn>
        </StyledBtnAdd>
      </ViewInputButton>
      <StyledScrollView>
       {theTasks}
      </StyledScrollView>
    </ViewContainer>
  );
};

export default TasksScreen;
