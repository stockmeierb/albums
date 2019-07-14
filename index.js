//import library to help create a component
import React from "react";
import { Text, AppRegistry } from "react-native";
//Default:
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

//create a componenet
const App = () => {
  return <Text>Hello World!</Text>;
};

//render component to a device
AppRegistry.registerComponent("albums", () => App);
//Default:
// AppRegistry.registerComponent(appName, () => App);

// /**
//  * @format
//  */
