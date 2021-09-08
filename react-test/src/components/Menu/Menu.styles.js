import styled from 'styled-components';

export const Content = styled.nav`
  position: absolute;
  top: 64px;
  left: 0px;
  bottom: 0px;
  width: 200px;
  transform: ${ (props) => props.menuOn ? 'translateX(0%)' : 'translateX(-100%)'};
  transition: transform 300ms ease-in-out 0s;
  background-color: var(--yellow);
`;
