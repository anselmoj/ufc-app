/* eslint-disable no-use-before-define */
import React from 'react';

import styled from 'styled-components/native';

import {
  KeyboardAvoidingViewProps,
  Platform,
  FlatList as RNFlaList,
  ScrollViewProps,
} from 'react-native';

import colors from './colors';

interface IMainProps {
  backgroundColor?: string;
}

const Main = styled.View<IMainProps>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.mainBackground};
  flex: 1;
  width: 100%;
`;

interface ISafeAreaProps {
  backgroundColor?: string;
}

const SafeArea = styled.SafeAreaView<ISafeAreaProps>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.transparent};
  flex: 1;
  width: 100%;
`;

const Full = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'height' : 'height',
} as KeyboardAvoidingViewProps)`
  flex: 1;
  width: 100%;
`;

const FlatList = styled(RNFlaList as new <T>() => RNFlaList<T>).attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
` as React.ComponentType as new <T>() => RNFlaList<T>;

interface IScrollProps {
  alignItems?: string;
  backgroundColor?: string;
  justifyContent?: string;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
}

const Scroll = styled.ScrollView.attrs<IScrollProps>(
  (props) =>
    ({
      contentContainerStyle: {
        alignItems: props.alignItems ? props.alignItems : 'flex-start',
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : colors.transparent,
        flexGrow: 1,
        justifyContent: props.justifyContent
          ? props.justifyContent
          : 'flex-start',
        paddingBottom: props.paddingBottom ? props.paddingBottom : 0,
        paddingLeft: props.paddingLeft ? props.paddingLeft : 0,
        paddingRight: props.paddingRight ? props.paddingRight : 0,
        paddingTop: props.paddingTop ? props.paddingTop : 0,
      },
      showsVerticalScrollIndicator: false,
    } as ScrollViewProps),
)<IScrollProps>`
  width: 100%;
`;

interface IContentProps {
  justifyContent?: string;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
}

const Content = styled.View<IContentProps>`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : 0}px;
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : 0)}px;
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : 0)}px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 0)}px;
  width: 100%;
  ${(props) =>
    props.justifyContent
      ? `justify-content: ${props.justifyContent}`
      : undefined}
`;

export default {
  Main,
  FlatList,
  Full,
  SafeArea,
  Scroll,
  Content,
};
