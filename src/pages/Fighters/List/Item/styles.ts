import styled from 'styled-components/native'

import { TouchableOpacityProps } from 'react-native'

import colors from '@styles/colors'

export const Container = styled.View`
  padding: 24px 8px 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Label = styled.Text`
  color: ${colors.blue500};
  font-family: 'Roboto-Regular';
  font-size: 14px;
  align-items: center;
  display: flex;
`

export const Title = styled.Text`
  color: ${colors.blue500};
  justify-content: flex-start;
  align-items: center;
  display: flex;
  font-weight: 600;
`

export const TitleDetails = styled.Text`
  color: ${colors.gray500};
  justify-content: flex-start;
  align-items: center;
  display: flex;
  font-weight: 600;
`


export const MainContainer = styled.View`
  display: flex;
  flex-direction: row;
`

export const Content = styled.View`
  display: flex;
  flex-direction: column;
`

export const ContainerItem = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 10px;
`

export const PhotoContainer = styled.View`
  display: flex;
  gap: 4px;
  margin-bottom: 10px;
`;

export const Photo = styled.Image`
  width: 100%;
`;

export const ContainerEdit = styled.TouchableOpacity.attrs<TouchableOpacityProps>(
  {
    activeOpacity: 0.7,
  },
)`
  align-items: center;
`

export const ContainerDetails = styled.TouchableOpacity.attrs<TouchableOpacityProps>(
  {
    activeOpacity: 0.7,
  },
)`
  margin-bottom: 8px;

`
