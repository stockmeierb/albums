import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardItem from "./CardItem";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { headerStyles, thumbStyle } = styles;
  return (
    <Card>
      <CardItem>
        <View>
          <Image source={{ uri: thumbnail_image }} style={thumbStyle} />
        </View>
        <View style={headerStyles}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerStyles: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  thumbStyle: { height: 50, width: 50 }
};

export default AlbumDetail;
