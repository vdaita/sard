import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ComplaintForm from './screens/ComplaintForm.js'

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
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
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
