/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useState } from 'react'

import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PublicStackParamList } from '@routes/public.routes'
import IFighter from 'src/models/Fighter'
import {CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {
  Container,
  ContainerDetails,
  ContainerEdit,
  ContainerItem,
  Content,
  Label,
  Photo,
  PhotoContainer,
  Title,
  TitleDetails,
} from './styles'
import { Alert } from 'react-native';

interface IItemProps {
  isLoading: boolean
  item: IFighter
}

const Item: React.FC<IItemProps> = ({ item }) => {
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>()
  const [imageFighter, setImageFighter] = useState<string>('')

  const handleNavigateToEdit = useCallback(
    (id: number) => {
      navigation.navigate('FighterEdit', { id })
    },
    [navigation],
  )

  const handleNavigateToDetails = useCallback(
    (id: number) => {
      navigation.navigate('FighterDetails', { id })
    },
    [navigation],
  )


  const pickImageFromGalery = async () => {
    const options: ImageLibraryOptions  = {
      mediaType: 'photo'
    }

    const result = await launchImageLibrary(options)

    if(result?.assets) {
      setImageFighter(result.assets[0].uri!)
      return
    }

  }

  const pickImageFromCamera = async () => {

    const options: CameraOptions = {
      mediaType: 'photo',
      saveToPhotos: false,
      cameraType: 'front',
      quality: 1,
    }

    const result = await launchCamera(options)

    if(result?.assets) {
      setImageFighter(result.assets[0].uri!)
      return
    }


  }

  const handleImageFighter = () => {
    Alert.alert(
      "Selecione",
      "Informe de onde voce quer pegar a foto", [
        {
          text: "Galeria",
          onPress: () => pickImageFromGalery(),
          style: "default",
        },
        {
          text: "Camera",
          onPress: () => pickImageFromCamera(),
          style: "default",
        }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('tratar depois')
      }
    )
  }


  return (
    <>
      <Container>
        <Content>
          <ContainerItem>
            <Label>Nome:</Label>
            <Title>{item.name}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Categoria:</Label>
            <Title>{item.category}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Ranking:</Label>
            <Title>{item.ranking}º</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Time:</Label>
            <Title>{item.academy}</Title>
          </ContainerItem>

          <ContainerItem>
            <Label>Cidade:</Label>
            <Title>{item.city}</Title>
          </ContainerItem>

          {
            imageFighter && (
              <PhotoContainer>
              <Label>Imagem</Label>
                <Photo  source={{uri: imageFighter}} style={{
                  width: 56,
                  height: 56,
                  display: 'flex',
                  flexDirection: 'row',
                  borderRadius: 100,
                  resizeMode: 'contain'
                }} />
              </PhotoContainer>
            )
          }


          <ContainerDetails onPress={() => handleNavigateToDetails(item.id)}>
            <TitleDetails>Detalhes</TitleDetails>
          </ContainerDetails>

          <ContainerDetails onPress={() => handleImageFighter()}>
            <TitleDetails>Imagem</TitleDetails>
          </ContainerDetails>
        </Content>

        <ContainerEdit onPress={() => handleNavigateToEdit(item.id)}>
          <Title>Editar lutador</Title>
        </ContainerEdit>


      </Container>
    </>
  )
}

export default Item
