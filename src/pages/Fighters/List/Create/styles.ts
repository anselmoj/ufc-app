import styled from 'styled-components/native';

import colors from '@styles/colors';
import { TouchableOpacityProps } from 'react-native';

export const Header = styled.View`
  background-color: ${colors.transparent};
  padding: 44px 0 16px 0;
  width: 100%;
  flex-direction: row;
`;

export const IconContent = styled.TouchableOpacity.attrs<TouchableOpacityProps>(
  {
    activeOpacity: 0.7,
  },
)`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  justify-content: flex-start;
`


export const HeaderContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.purple600};
  font-family: 'Roboto-Medium';
  font-size: 16px;
  line-height: 16px;
  padding-left: 8px;
  text-align: center;
`;
