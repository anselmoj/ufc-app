import styled from 'styled-components/native';

import {ImageProps} from 'react-native';

import colors from '@styles/colors';

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 32px;
`;

export const Image = styled.Image.attrs<unknown, Partial<ImageProps>>({
  resizeMode: 'contain',
})``;

export const Message = styled.Text`
  color: ${colors.purple800};
  font-family: 'Roboto-Medium';
  margin-bottom: 8px;
  margin-top: 16px;
  text-align: center;
`;
