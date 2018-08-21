import React, { Component } from "react";
import styled from "styled-components";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  
  return (
    <StyledApp>
      <Header judulAlbum={"Albums"}/>
      <AlbumList />
    </StyledApp>
  );
};

export default App;

const StyledApp = styled.View`
  ${'' /* flex: 1;  hanya jika scrolling tidak bisa, seperttinya hanya di ios emulator*/}
  width: 100%;
  height: 100%;
  background-color: white;
`;
