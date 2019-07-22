import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardItem from "./CardItem";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    headerStyles,
    headerTextStyle,
    thumbStyle,
    thumbBoxStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardItem>
        <View style={thumbBoxStyle}>
          <Image source={{ uri: thumbnail_image }} style={thumbStyle} />
        </View>
        <View style={headerStyles}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardItem>
      <CardItem>
        <Button />
      </CardItem>
    </Card>
  );
};

const styles = {
  headerStyles: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: { fontSize: 18 },
  thumbStyle: { height: 50, width: 50 },
  thumbBoxStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: { height: 300, flex: 1, width: null }
};

export default AlbumDetail;
