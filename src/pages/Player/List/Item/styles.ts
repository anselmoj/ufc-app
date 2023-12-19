import styled from 'styled-components/native';

import {ImageProps} from 'react-native';

import colors from '@styles/colors';

export const Container = styled.View`
  padding: 24px 8px 0 8px;
`;

export const Label = styled.Text`
  color: ${colors.blue500};
  font-family: 'Roboto-Regular';
  font-size: 14px;
  align-items: center;
  display: flex;
`;

export const TitleTeam = styled.Text`
  color: ${colors.blue500};
  justify-content: flex-start;
  align-items: center;
  display: flex;
  font-weight: 600;
`;

export const Image = styled.Image.attrs<unknown, Partial<ImageProps>>({
  resizeMode: 'contain',
  height: 56,
  width: 56,
})``;

export const ContainerTeam = styled.View`
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
  height: 66px;
`;
