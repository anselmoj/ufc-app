import React from 'react';

import ComponentButtonBase from '@components/button/Base';

import error from '@assets/logo.png';

import ComponentIsVisible from '../IsVisible';
import {Container, Image, Message} from './styles';

interface IComponentErrorProps {
  tryAgain?: () => void;
}

const ComponentError = ({tryAgain}: IComponentErrorProps) => {
  return (
    <Container>
      <Image alt="" source={error} />
      <Message>Não foi possível carregar os dados</Message>
      <ComponentIsVisible when={!!tryAgain}>
        <ComponentButtonBase onPress={tryAgain} width={70}>
          Tentar novamente
        </ComponentButtonBase>
      </ComponentIsVisible>
    </Container>
  );
};

export default ComponentError;
