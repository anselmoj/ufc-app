import styled from 'styled-components/native';

import colors from '@styles/colors';

export const FullContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const Container = styled.View`
  align-items: center;
  margin-bottom: 62px;
`;

export const Image = styled.Image`
  margin-bottom: 16px;
`;

export const Message = styled.Text`
  color: ${colors.purple800};
  font-family: 'Roboto-Regular';
  font-size: 20px;
`;
