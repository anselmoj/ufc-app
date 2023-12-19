import styled from 'styled-components/native';

import {TextInputProps, TouchableOpacityProps} from 'react-native';

import colors from '@styles/colors';

interface IContainerInputProps {
  hasError?: boolean;
}
export const ContainerInput = styled.View<IContainerInputProps>`
  align-items: center;
  background-color: ${colors.white900};
  border-color: ${(props) => (props.hasError ? colors.danger : colors.gray200)};
  border-radius: 12px;
  border-width: 1px;
  flex-direction: row;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
`;

interface IContainerProps {
  isErrored?: boolean;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}
export const Container = styled.View<IContainerProps>`
  margin-bottom: ${(props) => props.marginBottom || 16}px;
  margin-left: ${(props) => props.marginLeft || 0}px;
  margin-right: ${(props) => props.marginRight || 0}px;
  width: 100%;
`;

export const Label = styled.Text`
  color: ${colors.purple800};
  font-family: 'Roboto-Regular';
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput.attrs<TextInputProps>({
  placeholderTextColor: colors.gray200,
})`
  background-color: ${colors.white900};
  color: ${colors.black600};
  font-family: 'Roboto-Regular';
  height: 40px;
  padding-left: 8px;
  flex: 1;
`;

export const ToggleTypeTouchable = styled.TouchableOpacity.attrs<TouchableOpacityProps>(
  {
    hitSlop: {
      top: 15,
      right: 15,
      bottom: 15,
      left: 15,
    },
    activeOpacity: 0.7,
  },
)`
  align-items: center;
  justify-content: center;
  width: 24px;
`;

interface IMessageErrorProps {
  visible: boolean;
}
export const MessageError = styled.Text<IMessageErrorProps>`
  align-self: flex-end;
  color: ${colors.danger};
  font-size: 12px;
  margin-right: 5px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;
