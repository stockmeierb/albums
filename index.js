//import library to help create a component
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
//Default:
// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

//create a componenet
const App = () => {
  return (
    <View>
      <Header headerText={"Albums"} />
      <AlbumList />
    </View>
  );
};

//render component to a device
AppRegistry.registerComponent("albums", () => App);
//Default:
// AppRegistry.registerComponent(appName, () => App);

// /**
//  * @format
//  */
