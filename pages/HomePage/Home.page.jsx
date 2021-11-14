import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator(); 

import TasksScreen from '../TasksScreen/Tasks.screen';
import Profile from '../ProfileScreen/Profile.screen';

const Home = () => {
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
        tabBarActiveTintColor: "#07B3F9",
        tabBarInactiveTintColor: "#686868",
      })}>   
        <Tab.Screen name="Tasks">{()=><TasksScreen />}</Tab.Screen>
        <Tab.Screen name="Profile">{()=><Profile />}</Tab.Screen> 
      </Tab.Navigator>      
  );
};

export default Home;
