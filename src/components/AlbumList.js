import React from "react";
import styled from "styled-components";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

export default class AlbumList extends React.Component{
  state = { albums: [] }

  componentDidMount() {
    axios.get("http://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }))
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.url} data={album}/>
    );
  }

  render() {
    return (
      <StyledView>
        {this.renderAlbums()}
      </StyledView>
    );    
  }
};

const StyledView = styled.View`
  ${'' /* background-color: #f8f8f8; */}
`;
