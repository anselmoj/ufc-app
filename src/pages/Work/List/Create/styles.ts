import styled from 'styled-components/native'

import colors from '@styles/colors'

export const Header = styled.View`
  background-color: ${colors.mainBackground};
  justify-content: center;
  padding: 32px 0 16px 0;
  width: 100%;
`

export const HeaderContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${colors.purple600};
  font-family: 'Roboto-Medium';
  font-size: 16px;
  line-height: 16px;
  padding-left: 8px;
  text-align: center;
`
