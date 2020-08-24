import React from 'react';
import styled from 'styled-components';
const StyledPhotoshopLogo = styled.div`
  /* Rectangle 1 */

  width: 270px;
  height: 270px;
  background-color: #c4c4c4;
  z-index: 99;
  border-radius: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Figma_StyKj7D2Jy 1 */
`;
const StyledImg = styled.div`
  /* Rectangle 1 */

  position: relative;
  width: 250px;
  height: 250px;
  z-index: 100;
  background: url('/Figma_StyKj7D2Jy 1figma.svg');
  border-radius: 45px;
  /* Figma_StyKj7D2Jy 1 */
`;
const photoshop = () => {
  return (
    <StyledPhotoshopLogo>
      <StyledImg></StyledImg>
    </StyledPhotoshopLogo>
  );
};

export default photoshop;
