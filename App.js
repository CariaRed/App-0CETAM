import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation, createStackNavigator } from "@react-navigation/stack";
import Details from "./src/pages/Details/index"
import Task from "./src/pages/Task/index";
import NewTask from "./src/pages/NewTask/index"


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Task">
      <Stack.Screen
      name="Task"
      component={Task}
      options={{
        headerTintColor:"#f92e6a"
      }}
      />
      <Stack.Screen
      name="NewTask"
      component={NewTask}
      options={{
        headerTintColor:"#f92e6a"
      }}
      />
      <Stack.Screen
      name="Details"
      component={Details}
      options={{
        headerTintColor:"#f92e6a"
      }}
      />
    </Stack.Navigator>
   </NavigationContainer>
  );
}


