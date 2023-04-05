import styled from 'styled-components';

export const Section = styled.section``;
export const Title = styled.h2`
  margin-bottom: 15px;
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
`;
export const Button = styled.button`
  position: relative;
  padding: 5px;
  border-radius: 10px;
  width: 100px;
  color: white;
  background-size: 100%;
  z-index: 1;
  background: transparent;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  transition: 0.5s;
  &:first-letter {
    text-transform: uppercase;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: linear-gradient(
      333deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(63, 9, 121, 0.3533788515406162) 43%,
      rgba(0, 212, 255, 1) 100%
    );
    border-radius: 10px;
    border: none;
    z-index: -1;
    transition: 0.5s;
  }
  &:after {
    content: '';
    position: absolute;
    background: linear-gradient(
      333deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(63, 9, 121, 0.3533788515406162) 43%,
      rgba(0, 212, 255, 1) 100%
    );
    border-radius: 10px;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
    z-index: -2;
  }
  &:hover {
    cursor: pointer;
    &:before {
      width: 100%;
    }
  }
`;
