import React from 'react';

import {NativeModules, Platform, View} from 'react-native';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

import colors from '@styles/colors';

import {Container} from './styles';

const ComponentTopWave: React.FC = () => {
  return (
    <Container>
      <View
        style={{
          backgroundColor: colors.purple900,
          height:
            Platform.OS === 'ios' ? NativeModules.StatusBarManager.HEIGHT : 0,
          marginTop:
            Platform.OS === 'ios' ? -NativeModules.StatusBarManager.HEIGHT : 0,
          marginBottom: Platform.OS === 'ios' ? -1 : 0,
        }}
      />
      <Svg
        fill={colors.mainBackground}
        height="100%"
        viewBox="0 0 1024 174"
        width="100%">
        <Path
          clipRule="evenodd"
          d="M0 73.137h42.667c42.666 0 128 0 213.333 24.38 85.333 24.378 170.667 73.136 256 77.2 85.333 4.063 170.667-36.569 256-56.885 85.333-20.316 170.667-20.316 213.333-20.316H1024V0H0v73.137z"
          fill="url(#paint0_linear_252_485)"
          fillRule="evenodd"
        />
        <Defs>
          <LinearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_252_485"
            x1={512}
            x2={512}
            y1={0}
            y2={175}>
            <Stop offset={0.442708} stopColor="#522546" />
            <Stop offset={1} stopColor="#88657F" />
          </LinearGradient>
        </Defs>
      </Svg>
    </Container>
  );
};

export default ComponentTopWave;
