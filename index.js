//import library to help create a component
import React from "react";
import { AppRegistry } from "react-native";
import Header from "./src/components/header";

//Default:
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

//create a componenet
const App = () => {
  return <Header headerText={"Albums"} />;
};

//render component to a device
AppRegistry.registerComponent("albums", () => App);
//Default:
// AppRegistry.registerComponent(appName, () => App);

// /**
//  * @format
//  */
