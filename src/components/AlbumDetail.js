import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import CardItem from "./CardItem";

const AlbumDetail = props => {
  return (
    <Card>
      <CardItem>
        <View>
          <Text>{props.album.title}</Text>
        </View>
        <View style={styles.headerStyles}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerStyles: {
    flexDirection: "column",
    justifyContent: "space-around"
  }
};

export default AlbumDetail;
