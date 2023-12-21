import styled from 'styled-components/native'

import { TouchableOpacityProps } from 'react-native'

import colors from '@styles/colors'

export const Header = styled.View`
  background-color: ${colors.white200};
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
  justify-content: center;
  display: flex;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.purple600};
  font-family: 'Roboto-Medium';
  font-size: 16px;
  line-height: 16px;
  padding-left: 8px;
  text-align: center;
`;



export const Container = styled.View`
  padding: 4px 8px 0 8px;
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
  gap: 8px;
  margin-bottom: 10px;
`

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
`
