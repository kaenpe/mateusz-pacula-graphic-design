import React from 'react';
import styled from 'styled-components';
const StyledPhotoshopLogo = styled.object`
  /* Rectangle 1 */

  width: 270px;
  height: 270px;
  display: inline-block;

  border-radius: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Figma_StyKj7D2Jy 1 */
`;
const StyledImg = styled.object`
  /* Rectangle 1 */

  width: 250px;
  height: 250px;
  display: inline-block;

  border-radius: 45px;
  /* Figma_StyKj7D2Jy 1 */
`;
const photoshop = () => {
  return (
    <>
      <StyledPhotoshopLogo
        type='image/svg+xml'
        data='Rectangle 1figma.svg'
      ></StyledPhotoshopLogo>
      <StyledImg
        type='image/svg+xml'
        data='Figma_StyKj7D2Jy 1figma.svg'
      ></StyledImg>
    </>
  );
};

export default photoshop;
