/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useEffect } from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import {
  Container,

  ContainerItem,
  Content,
  Header,
  HeaderContent,
  HeaderTitle,
  IconContent,
  Label,
  Title,
} from './styles'
import { useReduxSelector } from '@hooks/useReduxSelector'
import fighterSelectors from '@store/slices/fighters/selectors'
import { useReduxDispatch } from '@hooks/useReduxDispatch'
import { fighterActions } from '@store/slices/fighters'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FighterDetailsScreenRouteProp } from '@routes/public.routes'
import helpers from '@helpers/index'
import colors from '@styles/colors'



const FighterDetails: React.FC = () => {
  const reduxDispatch = useReduxDispatch()
  const details = useReduxSelector(fighterSelectors.details)
  const route = useRoute<FighterDetailsScreenRouteProp>()
  const navigation = useNavigation()

  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])


  const handleLoadDetails = useCallback(() => {
    reduxDispatch(
      fighterActions.detailsRequest({
        data: {
          id: route.params.id,
        },
        functions: {
          error: (err: any) => {
            helpers.errorHandling(err)
          },
        },
      })
    )
  }, [reduxDispatch, route.params.id])

  useEffect(() => {
    handleLoadDetails()
  }, [handleLoadDetails])

  return (
    <>
       <Header>
          <IconContent onPress={() => handleGoBack()}>
            <EvilIcons color={colors.blue500} name='arrow-left' size={32} />
          </IconContent>
        <HeaderContent>
          <HeaderTitle>Detalhes do lutador</HeaderTitle>
        </HeaderContent>
      </Header>
      <Container>
        <Content>
          <ContainerItem>
            <Label>Nome:</Label>
            <Title>{details?.name}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Categoria:</Label>
            <Title>{details?.category}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Peso:</Label>
            <Title>{details?.weight}kg</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Altura:</Label>
            <Title>{details?.height}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Idade:</Label>
            <Title>{details?.age} anos</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Time:</Label>
            <Title>{details?.academy}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Ranking:</Label>
            <Title>{details?.ranking} lugar</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Vitórias:</Label>
            <Title>{details?.wins}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Derrotas:</Label>
            <Title>{details?.defeats}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Nocautes:</Label>
            <Title>{details?.ko}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Finalizações:</Label>
            <Title>{details?.finalization}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Defesas pelo título:</Label>
            <Title>{details?.titleDefense}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Cidade:</Label>
            <Title>{details?.city}</Title>
          </ContainerItem>
        </Content>
      </Container>
    </>
  )
}

export default FighterDetails
