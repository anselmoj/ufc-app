import styled from 'styled-components/native';

import {TouchableOpacityProps} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

import colors from '@styles/colors';

export const Footer = styled.View`
  align-items: center;
  background-color: ${colors.red500};
  bottom: 0;
  padding-bottom: ${getBottomSpace() + 8}px;
  padding-top: 8px;
  position: absolute;
  width: 100%;
`;

export const FooterText = styled.Text`
  color: ${colors.white900};
  font-family: 'Roboto-Medium';
  font-size: 16px;
  letter-spacing: 1px;
`;

export const OptionsButton = styled.TouchableOpacity.attrs<TouchableOpacityProps>(
  {
    activeOpacity: 0.7,
    hitSlop: {
      top: 15,
      bottom: 15,
      left: 15,
      right: 15,
    },
  },
)`
  align-items: center;
  justify-content: center;
`;
