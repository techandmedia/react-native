import React from "react";
import { Image } from "react-native";
import styled from "styled-components";
import Button from "./Button";

const AlbumDetail = props => {
  const { artist, image, title, thumbnail_image } = props.data;

  return (
    <Card>
      <CardSection>
        <ThumbnailStyle>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: thumbnail_image }}
          />
        </ThumbnailStyle>
        <TextSection>
          <StyledText>{title}</StyledText>
          <StyledText>{artist}</StyledText>
        </TextSection>
      </CardSection>

      <CardSection>
        <Image
          style={{ height: 300, flex: 1, width: "auto" }}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button />
      </CardSection>

    </Card>
  );
};

export default AlbumDetail;

const TextSection = styled.View`
  flex-direction: column;
  justify-content: space-around;
`;

const CardSection = styled.View`
  border-bottom-width: 1px;
  padding: 5px;
  background-color: #fff;
  justify-content: flex-start;
  flex-direction: row;
  border-color: #ddd;
  position: relative;
`;

const StyledText = styled.Text`
  color: palevioletred;
  font-size: 15px;
  padding: 2px;
`;

const Card = styled.View`
  border: 1px solid #ddd;
  border-radius: 2px;
  margin: 5px 5px;
  ${"" /* border-bottom-width: 0; */} ${"" /* box-shadow: #000; */};
`;

const ThumbnailStyle = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 10;
  margin-right: 10;
`;
