/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback } from 'react'

import IWork from 'src/models/Work'

import {
  Container,
  ContainerEdit,
  ContainerItem,
  Content,
  Label,
  Title,
} from './styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PublicStackParamList } from '@routes/public.routes'

interface IItemProps {
  isLoading: boolean
  item: IWork
}

const Item: React.FC<IItemProps> = ({ item }) => {
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>()

  const handleNavigateTo = useCallback(
    (id: number) => {
      navigation.navigate('WorkEdit', { id })
    },
    [navigation],
  )

  return (
    <>
      <Container>
        <Content>
          <ContainerItem>
            <Label>Título:</Label>
            <Title>{item.title}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Descrição:</Label>
            <Title>{item.description}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Status:</Label>
            <Title>{item.status}º</Title>
          </ContainerItem>
        </Content>

        <ContainerEdit onPress={() => handleNavigateTo(item.id)}>
          <Title>Editar tarefa</Title>
        </ContainerEdit>
      </Container>
    </>
  )
}

export default Item
