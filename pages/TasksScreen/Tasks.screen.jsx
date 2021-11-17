import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {ViewContainer, ViewInputButton, StyledInput, StyledBtnAdd, 
  StyledTextBtn, StyledScrollView, ViewTasksAdd, TextTask, TextTaskTachado, ViewTaskBtns,  
  TextDate, ButtonsTaskDone, ButtonsTaskDelete, TextBtnTasks, MessageScroll} from "./Tasks.styles"; 

import { auth, db } from "../../firebase";

const TasksScreen = (props) => {
  const tasks = props.tasks; 
  const setTasks = props.setTasks; 
  const [textTask, setTextTask] = useState(); 
  const item = {"Titulo":"", "Estado":"pendiente", "Fecha":""};
  //const [tasks, setTasks] = useState([]); 

  //Variables para obtener la hora
  var fecha = new Date(); 
  var month = fecha.getMonth() + 1;
  var day = fecha.getDate();
  var year = fecha.getFullYear();  
  var dateNow = day+"/"+month+"/"+year; 

  /*const theTasks = tasks.map((textoo, id) => {
    return(    
      <ViewTasksAdd key={id}>
          <TextTask>{textoo}</TextTask>
          <ViewTaskBtns>
            <TextDate>{dateNow}</TextDate>
            <ButtonsTaskDone>
              <TextBtnTasks>✔</TextBtnTasks>
            </ButtonsTaskDone>
            <ButtonsTaskDelete>
              <TextBtnTasks>✖</TextBtnTasks>
            </ButtonsTaskDelete>
          </ViewTaskBtns>
      </ViewTasksAdd>
    )
  });*/
  
  useEffect(() => {
    listenTasks();
  }, [])

  // Función para la nueva tarea
  const createTask = () => {
    try {
      if (textTask.length > 0) {
        const todoRef = db.ref("actions/"+auth.currentUser?.uid+"/tasks");
        item.Titulo = textTask;
        item.Fecha = dateNow; 
        todoRef.push(item);
        console.log(item);
        listenTasks();
        setTextTask(null);
      } else {
        alert("Ingresar un título");
      }
    } catch (error) {
      alert("Ingresar un título");
    }
  };

  // Función para consultar las tareas
  const listenTasks = () => {
    console.log("listando");
    const todoRef = db.ref("actions/"+auth.currentUser?.uid+"/tasks");
    todoRef.on("value", (snapshot) => {
      const items= snapshot.val();
      const itemListar= [];
      for (let id in items) {
          itemListar.push({id, ...items[id] });
      }
      setTasks(itemListar);
      console.log(itemListar);
    } );
  };

  // Función para modificar el estado de la tarea
  const updateTasks = ( ID, estado ) => {
    console.log("Modificando a "+ID);
    console.log("Modificando estado por "+estado);
    const todoRef = db.ref("actions/"+auth.currentUser?.uid+"/tasks").child(ID);
    todoRef.update({
      Estado: estado,
    }).then(()=> listenTasks());
  };

  // Función para eliminar la tarea de la lista
  const deleteTasks = ( ID ) => {
    const todoRef = db.ref("actions/"+auth.currentUser?.uid+"/tasks").child(ID);
    todoRef.remove();
    listenTasks();
  };

  /*const _saveTask = () => {
    setTasks((currentTasks) => {
      return [textTask, ...currentTasks]; 
    });
    setTextTask((current) => current = ""); 
  }*/

  return (
    <ViewContainer>
      <ViewInputButton>
        <StyledInput
          placeholder="Add tasks here"
          value={textTask}
          onChangeText={(text) => setTextTask(text)}
        />
        <StyledBtnAdd onPress={()=>createTask()}>
          <StyledTextBtn>Add task</StyledTextBtn>
        </StyledBtnAdd>
      </ViewInputButton>
      <StyledScrollView>
        {tasks.length === 0 ? (<MessageScroll>No hay tareas agregadas</MessageScroll>) :(
          tasks?.map((item) => (
            <ViewTasksAdd key={item.id}>
              {item.Estado == "completada" ? (
                <TextTaskTachado>{item.Titulo}</TextTaskTachado>
              ) : (
                <TextTask>{item.Titulo}</TextTask>
              )}
                <ViewTaskBtns>
                  <TextDate>{item.Fecha}</TextDate>
                  {item.Estado === "completada" ? (
                    <ButtonsTaskDone onPress={()=>updateTasks(item.id, "pendiente")}>
                      <TextBtnTasks>✔</TextBtnTasks>
                    </ButtonsTaskDone>  
                  ) : (
                    <ButtonsTaskDone onPress={()=>updateTasks(item.id, "completada")} color={"#ffffff"}>
                      <TextBtnTasks>✔</TextBtnTasks>
                    </ButtonsTaskDone>
                  )}
                  <ButtonsTaskDelete onPress={()=>deleteTasks(item.id)}>
                    <TextBtnTasks>✖</TextBtnTasks>
                  </ButtonsTaskDelete>
                </ViewTaskBtns>
            </ViewTasksAdd>
          ))
        )}
       
      </StyledScrollView>
    </ViewContainer>
  );
};

export default TasksScreen;
