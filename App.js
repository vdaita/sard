import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ComplaintForm from './screens/ComplaintForm.js'
import ComplaintsList from './screens/ComplaintsList.js'
import Homepage from './screens/Homepage.js'
import Learning from './screens/Learning.js'
import HeatMap from './screens/HeatMap.js'
import Forum from './screens/Forum.js'


const Tab = createBottomTabNavigator();

function F() {
  return (
    <Forum/>
  );
}

function HomeScreen() {
  return (
    <Homepage/>
  );
}

function HM(){
  return (
    <HeatMap/>
  )
}

function L(){
  return (
    <Learning/>
  )
}

function CList() {
  return (
    <ComplaintsList/>
  );
}

function CF() {
  return (
      <ComplaintForm/>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
                initialRouteName="Home"
                sceneAnimationEnabled="true"
                activeColor="#000000"
                inactiveColor="#000000"
                
      >
        <Tab.Screen name="Home" component={HomeScreen}  options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-home" size={24} color="#000000" />
          ),
        }}/>
        <Tab.Screen name="Report Incident" component={CF} />
        <Tab.Screen name="Learning" component={L} />
        <Tab.Screen name="Complaint List" component={CList} />
        <Tab.Screen name="Heatmap" component={HM}/>
        <Tab.Screen name="Forum" component={F}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
