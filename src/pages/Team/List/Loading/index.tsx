import React, {useEffect, useState} from 'react';

import ContentLoader, {Rect} from 'react-content-loader/native';
import {Dimensions} from 'react-native';

export interface IDataLoading {
  id: number;
}

export const dataLoading: IDataLoading[] = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
];

const Loading = () => {
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const {width: widthScreen} = Dimensions.get('screen');

  useEffect(() => {
    setCurrentWidth(widthScreen);
  }, [widthScreen]);

  return (
    <ContentLoader
      backgroundColor="#d9d3d3"
      foregroundColor="#ecebeb"
      height={215}
      speed={1}
      viewBox={`0 0 ${currentWidth} 215`}
      width={currentWidth}>
      <Rect height="6" rx="3" ry="3" width="100" x="8" y="8" />
      <Rect height="6" rx="3" ry="3" width="120" x={widthScreen - 128} y="8" />
      <Rect height="12" rx="3" ry="3" width="80" x="8" y="24" />
      <Rect height="50" rx="3" ry="3" width="80" x="8" y="40" />
      <Rect
        height="30"
        rx="3"
        ry="3"
        width="110"
        x={widthScreen - 118}
        y="24"
      />
      <Rect
        height="30"
        rx="3"
        ry="3"
        width="130"
        x={widthScreen - 138}
        y="60"
      />
      <Rect height="14" rx="3" ry="3" width="320" x="8" y="100" />
      <Rect height="12" rx="3" ry="3" width="100" x="8" y="125" />
      <Rect height="12" rx="3" ry="3" width="180" x="8" y="145" />
      <Rect height="12" rx="3" ry="3" width="80" x={widthScreen - 88} y="145" />
      <Rect height="12" rx="3" ry="3" width="150" x="8" y="165" />
      <Rect
        height="12"
        rx="3"
        ry="3"
        width="150"
        x={widthScreen - 158}
        y="165"
      />
      <Rect height="30" rx="3" ry="3" width={widthScreen} x="0" y="185" />
    </ContentLoader>
  );
};

export default Loading;
