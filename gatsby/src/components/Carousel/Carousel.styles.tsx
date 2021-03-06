import styled from 'styled-components';

export const CarouselStyles = styled.div`
  .rightArrow {
    position: absolute;
    top: 50%;
    right: 20px;
    font-size: 2rem;
  }

  .leftArrow {
    position: absolute;
    top: 50%;
    left: 20px;
    font-size: 2rem;
  }
`;


export const ImageStyles = styled.img`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0px 2vw;
  object-fit: cover;
`;
