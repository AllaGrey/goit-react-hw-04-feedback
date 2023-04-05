import styled from 'styled-components';

export const Section = styled.section`
  padding: 15px;
  box-shadow: inset 10px 10px 12px -11px rgba(0, 0, 0, 0.75);
  background: linear-gradient(
    333deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(63, 9, 121, 0.3533788515406162) 43%,
    rgba(0, 212, 255, 1) 100%
  );
  border-radius: 10px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;
export const Title = styled.h2`
  margin-bottom: 15px;
`;
export const List = styled.ul``;
export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
