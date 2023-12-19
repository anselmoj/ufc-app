import React from 'react';

import EmptyImage from '@assets/logo.png';

import {Container, FullContainer, Image, Message} from './styles';

interface IEmptyProps {
  message: string;
}

const Empty: React.FC<IEmptyProps> = ({message}) => {
  return (
    <FullContainer>
      <Container>
        <Image alt="" source={EmptyImage} />
        <Message>{message}</Message>
      </Container>
    </FullContainer>
  );
};

export default Empty;
