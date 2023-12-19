import React, {PropsWithChildren} from 'react';

import {ActivityIndicator, TouchableOpacityProps} from 'react-native';

import colors from '@styles/colors';

import ComponentIsVisible from '@components/utils/IsVisible';

import {Button, Text} from './styles';

interface IButtonProps extends TouchableOpacityProps {
  backgroundColor?: string;
  height?: number;
  isLoading?: boolean;
  marginTop?: number;
  width?: number;
}

const ComponentButtonBase: React.FC<PropsWithChildren<IButtonProps>> = ({
  backgroundColor,
  children,
  height,
  isLoading = false,
  marginTop,
  width,
  ...rest
}) => (
  <Button
    {...rest}
    backgroundColor={backgroundColor}
    height={height}
    marginTop={marginTop}
    width={width}>
    <ComponentIsVisible when={isLoading}>
      <ActivityIndicator color={colors.white900} size={38} />
    </ComponentIsVisible>
    <ComponentIsVisible when={!isLoading}>
      <Text>{children}</Text>
    </ComponentIsVisible>
  </Button>
);

export default ComponentButtonBase;
