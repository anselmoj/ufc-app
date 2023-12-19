import styled from 'styled-components/native';

import {TouchableOpacityProps} from 'react-native';

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

export const Title = styled.Text`
  color: ${colors.blue500};
  justify-content: flex-start;
  align-items: center;
  display: flex;
  font-weight: 600;
`;

export const ContainerItem = styled.View`
  display: flex;
  margin-bottom: 10px;
`;

export const ContainerEdit = styled.TouchableOpacity.attrs<TouchableOpacityProps>(
  {
    activeOpacity: 0.7,
  },
)`
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
  flex-direction: row;
`;
