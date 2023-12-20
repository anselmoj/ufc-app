/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import IWork from 'src/models/Work'

import {
  Container,
  ContainerEdit,
  ContainerItem,
  Content,
  Label,
  Title,
} from './styles'

interface IItemProps {
  isLoading: boolean
  item: IWork
}

const Item: React.FC<IItemProps> = ({ item }) => {
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

        <ContainerEdit>
          <Title>Editar tarefa</Title>
        </ContainerEdit>
      </Container>
    </>
  )
}

export default Item
