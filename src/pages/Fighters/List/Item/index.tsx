/* eslint-disable jsx-a11y/alt-text */
import React, {useCallback} from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PublicStackParamList} from '@routes/public.routes';
import IFighter from 'src/models/Fighter';

import {Container, ContainerEdit, ContainerItem, Label, Title} from './styles';

interface IItemProps {
  isLoading: boolean;
  item: IFighter;
}

const Item: React.FC<IItemProps> = ({item}) => {
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>();

  const handleNavigateTo = useCallback(
    (id: number) => {
      navigation.navigate('FighterEdit', {id});
    },
    [navigation],
  );

  return (
    <>
      <Container>
        <ContainerItem>
          <Label>Nome</Label>
          <Title>{item.name}</Title>
        </ContainerItem>

        <ContainerItem>
          <Label>Categoria</Label>
          <Title>{item.category}</Title>
        </ContainerItem>

        <ContainerItem>
          <Label>Academia</Label>
          <Title>{item.academy}</Title>
        </ContainerItem>

        <ContainerEdit onPress={() => handleNavigateTo(item.id)}>
          <Title>Editar</Title>
        </ContainerEdit>
      </Container>
    </>
  );
};

export default Item;
