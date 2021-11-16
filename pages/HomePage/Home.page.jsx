import React, {useState} from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator(); 

import TasksScreen from '../TasksScreen/Tasks.screen';
import Profile from '../ProfileScreen/Profile.screen';

const Home = () => {
  const [photo, setPhoto] = useState(null); 
  const [tasks, setTasks] = useState([]); 

  return (
      <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused, color, size})=>{
          let iconName; 
          if(route.name === "Tasks"){
            iconName = "ios-list"; 
          }else if (route.name === "Profile") {
            iconName = "ios-person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0782F9",
        tabBarInactiveTintColor: "#686868",
      })}>   
        <Tab.Screen name="Tasks">
          {(props) => <TasksScreen {...props} tasks={tasks} setTasks={setTasks}/>}
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {(props) => <Profile {...props} photo={photo} setPhoto={setPhoto}/>}
        </Tab.Screen> 
      </Tab.Navigator>      
  );
};

export default Home;
