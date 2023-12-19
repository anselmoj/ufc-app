import styled, {css} from 'styled-components/native';

import {Animated} from 'react-native';

import colors from '@styles/colors';

interface IContainerProps {
  keyboardSpace?: number;
}
export const Container = styled(Animated.View)<IContainerProps>`
  background-color: ${colors.mainBackground};
  height: 100%;
  padding: 16px 16px;
  width: 100%;
`;

export const Form = styled.View`
  width: 100%;
`;

interface IInputContainerProps {
  width?: string;
}
export const InputContainer = styled.View<IInputContainerProps>`
  margin-bottom: 3px;
  flex-direction: row;
  column-gap: 20px;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
