import React from "react";
import styled from "styled-components";

const Header = (props) => {

  return (
    <StyledView>
      <StyledText>{props.judulAlbum}</StyledText>
    </StyledView>
  );
};

export default Header;

const StyledView = styled.View`
  background-color: #F8F8F8;
  justify-content: center;
  align-items: center;
  padding: 8px 0; ${'' /* statement ini berarti: padding top dan bottom 8 piksel, kanan kiri 0 */}
  box-shadow: 5px 100px #000;
  position: relative;
`;

const StyledText = styled.Text`
  color: palevioletred;
  font-size: 18px;
`;
