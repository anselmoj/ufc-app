import styled, {css} from 'styled-components/native';

import {Dimensions, TouchableOpacityProps} from 'react-native';

import colors from '@styles/colors';

const {width: screenWidth} = Dimensions.get('screen');

export const LogoHomeContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  width: 100%;
`;

export const Logo = styled.Image`
  width: 100%;
`;

export const Content = styled.View`
  width: 100%;
`;

export const InnerContentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;

  ${() =>
    screenWidth >= 500 &&
    css`
      justify-content: space-around;
      margin-bottom: 32px;
    `}
`;

export const Card = styled.TouchableOpacity.attrs<TouchableOpacityProps>({
  activeOpacity: 0.7,
})`
  align-items: center;
  height: 140px;
  justify-content: center;
  width: 155px;
  background-color: ${colors.gray100};
  border-radius: 12px;
  border: ${colors.blue500};

  ${() =>
    screenWidth >= 500 &&
    css`
      height: ${(screenWidth - 32) / 3.5}px;
      width: ${(screenWidth - 32) / 3}px;
    `}
`;

export const TextCard = styled.Text`
  color: ${colors.blue500};
  font-family: 'Roboto-Medium';
  font-size: 14px;
  ${() =>
    screenWidth >= 500 &&
    css`
      font-size: 16px;
    `}
`;

export const FooterContainer = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

export const TextFooter = styled.Text`
  color: ${colors.black600};
  font-family: 'Roboto-Regular';
  font-size: 12px;
  ${() =>
    screenWidth >= 500 &&
    css`
      font-size: 14px;
    `}
`;
