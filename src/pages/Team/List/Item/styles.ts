import styled from 'styled-components/native';

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

export const Image = styled.View`
  align-items: center;
  display: flex;
  align-self: center;
`;

export const ContainerTeam = styled.View`
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-items: center;
  height: 66px;
`;

export const ContainerLogo = styled.View`
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 10px;
`;
