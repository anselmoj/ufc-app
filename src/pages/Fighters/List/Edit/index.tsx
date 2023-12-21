import { useCallback, useEffect } from 'react'

import Toast from 'react-native-root-toast'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import { useReduxDispatch } from '@hooks/useReduxDispatch'
import { useReduxSelector } from '@hooks/useReduxSelector'
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import {
  FighterEditScreenRouteProp,
  PublicStackParamList,
} from '@routes/public.routes'
import { fighterActions } from '@store/slices/fighters'
import fighterSelectors from '@store/slices/fighters/selectors'
import Containers from '@styles/containers'

import helpers from '@helpers/index'

import FighterForm, { SubmitFormData } from '../Form'
import { Header, HeaderContent, IconContent, Title } from './styles'
import colors from '@styles/colors'

const Edit = () => {
  const reduxDispatch = useReduxDispatch()
  const route = useRoute<FighterEditScreenRouteProp>()
  const isLoading = useReduxSelector(fighterSelectors.editIsLoading)
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>()
  const fighter = useReduxSelector(fighterSelectors.details)

  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const loadFighterInfo = useCallback(() => {
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
      }),
    )
  }, [reduxDispatch, route.params.id])

  const handleLoadFighters = useCallback(() => {
    reduxDispatch(
      fighterActions.getAllRequest({
        functions: {
          errors: (err: any) => {
            helpers.errorHandling(err)
          },
        },
      }),
    )
  }, [reduxDispatch])

  const handleEditFighter = useCallback(
    (data: SubmitFormData): void => {
      try {
        if (!fighter) {
          throw new Error('Error::Edit::fighter')
        }
        reduxDispatch(
          fighterActions.editRequest({
            data: {
              id: fighter.id,
              academy: data.academy,
              category: data.category,
              city: data.city,
              ranking: data.ranking,
              name: data.name,
              age: data.age,
              defeats: data.defeats,
              finalization: data.finalization,
              height: data.height,
              ko: data.ko,
              titleDefense: data.titleDefense,
              weight: data.weight,
              wins: data.wins,
            },
            functions: {
              success: () => {
                Toast.show('Lutador editado com sucesso')
                handleLoadFighters()
                navigation.goBack()
              },
            },
          }),
        )
      } catch (error) {
        console.log(error)
      }
    },
    [fighter, handleLoadFighters, navigation, reduxDispatch],
  )

  useEffect(() => {
    loadFighterInfo()
  }, [loadFighterInfo])

  return (
    <Containers.Main>
      <Header>
        <IconContent onPress={() => handleGoBack()}>
          <EvilIcons color={colors.blue500} name='arrow-left' size={32} />
        </IconContent>
        <HeaderContent>
          <Title>Edição do lutador</Title>
        </HeaderContent>
      </Header>
      <FighterForm
        initialData={{
          academy: fighter?.academy || '',
          category: fighter?.category || '',
          city: fighter?.city || '',
          name: fighter?.name || '',
          ranking: fighter?.ranking || '',
          age: fighter?.age || '',
          defeats: fighter?.defeats || '',
          finalization: fighter?.finalization || '',
          height: fighter?.height || '',
          ko: fighter?.ko || '',
          titleDefense: fighter?.titleDefense || '',
          weight: fighter?.weight || '',
          wins: fighter?.wins || '',


        }}
        isLoading={isLoading}
        onSubmit={handleEditFighter}
      />
    </Containers.Main>
  )
}

export default Edit
