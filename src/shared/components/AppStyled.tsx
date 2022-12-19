import styled from 'styled-components';

interface AppStyledProps {
  mode: 'dark' | 'light';
}

const AppStyled = styled.div<AppStyledProps>`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background[props.mode]};
  color: ${(props) => props.theme.color[props.mode]};
`;

export default AppStyled;
