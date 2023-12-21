import styled from 'styled-components/native'

import { Animated, type TouchableOpacityProps } from 'react-native'

import colors from '@styles/colors'

interface IContainerProps {
  keyboardSpace?: number
  paddingBottom?: number
}

export const Container = styled(Animated.View)<IContainerProps>`
  align-self: flex-end;
  background-color: ${colors.gray100};
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  margin-bottom: ${(props) =>
    props.keyboardSpace ? props.keyboardSpace : 0}px;
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : 0}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  width: 100%;
`

export const CloseText = styled.Text`
  color: ${colors.blue500};
  font-family: 'Archivo-Regular';
  font-size: 13px;
`

export const CloseButton = styled.TouchableOpacity.attrs<
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
  position: absolute;
  right: 0;
`

export const Header = styled.View`
  align-items: center;
  background-color: ${colors.gray100};
  flex-direction: row;
  justify-content: center;
  padding: 8px 0;
  position: relative;
  width: 100%;
`

export const HeaderContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${colors.blue500};
  font-family: 'Archivo-Medium';
  font-size: 16px;
  text-align: center;
`

export const Content = styled.View``

export const HorizontalContainer = styled.View`
  display: flex;
  width: 100%;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
  width: 100%;
`
