//import libraries
import React from "react";
import { Text, View } from "react-native";

//make component
const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F8F8F8"
  },
  textStyle: {
    fontSize: 20
  }
};

//make component available to other parts of the app (export)
export default Header;