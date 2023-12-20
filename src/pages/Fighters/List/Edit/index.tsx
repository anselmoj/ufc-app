import { useCallback, useEffect } from 'react'

import Toast from 'react-native-root-toast'

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
import { Header, HeaderContent, Title } from './styles'

const Edit = () => {
  const reduxDispatch = useReduxDispatch()
  const route = useRoute<FighterEditScreenRouteProp>()
  const isLoading = useReduxSelector(fighterSelectors.editIsLoading)
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>()
  const fighter = useReduxSelector(fighterSelectors.details)

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
              position: data.position,
              name: data.name,
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
          position: fighter?.position || '',
        }}
        isLoading={isLoading}
        onSubmit={handleEditFighter}
      />
    </Containers.Main>
  )
}

export default Edit
