import styled from 'styled-components/native';

import {TouchableOpacityProps} from 'react-native';

import colors from '@styles/colors';

interface IButtonProps {
  backgroundColor?: string;
  height?: number;
  marginTop?: number;
  width?: number;
}
export const Button = styled.TouchableOpacity.attrs<
  IButtonProps,
  TouchableOpacityProps
>({
  activeOpacity: 0.7,
})<IButtonProps>`
  align-items: center;
  align-self: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.blue500};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  height: ${(props) => (props.height ? props.height : 42)}px;
  justify-content: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 16)}px;
  width: ${(props) => (props.width ? props.width : 100)}%;
  min-width: ${(props) => (props.width ? props.width : 100)}%;
`;

export const Text = styled.Text`
  color: ${colors.white900};
  font-family: 'Roboto-Medium';
  font-size: 16px;
`;
