import styled from 'styled-components/native';

import {Platform} from 'react-native';

import colors from '@styles/colors';

export const Container = styled.View`
  aspect-ratio: ${1024 / 175};
  background-color: ${colors.mainBackground};
  margin-top: ${Platform.OS === 'ios' ? '0' : '-1px'};
  width: 100%;
`;
