import { useCallback } from 'react'

import Toast from 'react-native-root-toast'

import { useReduxDispatch } from '@hooks/useReduxDispatch'
import { useReduxSelector } from '@hooks/useReduxSelector'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PublicStackParamList } from '@routes/public.routes'
import { fighterActions } from '@store/slices/fighters'
import fighterSelectors from '@store/slices/fighters/selectors'
import Containers from '@styles/containers'

import helpers from '@helpers/index'

import FighterForm, { SubmitFormData } from '../Form'
import { Header, HeaderContent, Title } from './styles'

const Create = () => {
  const reduxDispatch = useReduxDispatch()
  const isLoading = useReduxSelector(fighterSelectors.createIsLoading)
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>()

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

  const handleCreateFighter = useCallback(
    (data: SubmitFormData) => {
      reduxDispatch(
        fighterActions.createRequest({
          data: {
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
              Toast.show('Lutador adicionado com sucesso')
              handleLoadFighters()
              navigation.goBack()
            },
          },
        }),
      )
    },
    [handleLoadFighters, navigation, reduxDispatch],
  )

  return (
    <Containers.Main>
      <Header>
        <HeaderContent>
          <Title>Criação do lutador</Title>
        </HeaderContent>
      </Header>
      <FighterForm isLoading={isLoading} onSubmit={handleCreateFighter} />
    </Containers.Main>
  )
}

export default Create
