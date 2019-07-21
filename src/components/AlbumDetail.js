import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardItem from "./CardItem";

const AlbumDetail = props => {
  return (
    <Card>
      <CardItem>
        <View>
          <Image source={{ uri: props.album.thumbnail_image }} />
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
