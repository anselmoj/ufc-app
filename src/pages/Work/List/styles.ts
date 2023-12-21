import styled from 'styled-components/native'

import { TouchableOpacityProps } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import colors from '@styles/colors'

export const ButtonContainer = styled.View`
  width: 100%;
  margin-top: 24px;
`

export const Footer = styled.View`
  align-items: center;
  background-color: ${colors.red500};
  bottom: 0;
  padding-bottom: ${getBottomSpace() + 8}px;
  padding-top: 8px;
  position: absolute;
  width: 100%;
`

export const FullButton = styled.TouchableOpacity.attrs<TouchableOpacityProps>({
  activeOpacity: 0.7,
})`
  align-items: center;
  background-color: ${colors.blue500};
  flex-direction: row;
  height: 42px;
  justify-content: center;
`

export const FullButtonText = styled.Text`
  color: ${colors.white900};
  font-family: 'Roboto-Medium';
  font-size: 14px;
  margin-left: 8px;
`

export const FooterText = styled.Text`
  color: ${colors.white900};
  font-family: 'Roboto-Medium';
  font-size: 16px;
  letter-spacing: 1px;
`

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
  align-items: flex-end;
  right: 20px;
`

export const Button = styled.TouchableOpacity.attrs<
  unknown,
  TouchableOpacityProps
>({
  activeOpacity: 0.75,
  hitSlop: {
    bottom: 15,
    left: 15,
    right: 15,
    top: 15,
  },
})`
  align-items: center;
  justify-content: end;
`
