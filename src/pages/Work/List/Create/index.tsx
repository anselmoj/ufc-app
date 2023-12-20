import Containers from '@styles/containers'
import { Header, HeaderContent, Title } from './styles'
import WorkForm, { SubmitFormData } from '../Form'
import { useReduxDispatch } from '@hooks/useReduxDispatch'
import { useCallback } from 'react'
import { workActions } from '@store/slices/work'
import Toast from 'react-native-root-toast'
import { useNavigation } from '@react-navigation/native'
import { useReduxSelector } from '@hooks/useReduxSelector'
import workSelectors from '@store/slices/work/selectors'
import helpers from '@helpers/index'

const WorkCreate = () => {
  const reduxDispatch = useReduxDispatch()
  const navigation = useNavigation()
  const isLoading = useReduxSelector(workSelectors.crateIsLoading)

  const handleLoadWorks = useCallback(() => {
    reduxDispatch(
      workActions.getAllRequest({
        functions: {
          errors: (err: any) => {
            helpers.errorHandling(err)
          },
        },
      }),
    )
  }, [reduxDispatch])

  const handleCreateWork = useCallback(
    (data: SubmitFormData) => {
      reduxDispatch(
        workActions.createRequest({
          data: {
            description: data.description,
            status: data.status,
            title: data.title,
          },
          functions: {
            success: () => {
              Toast.show('Tarefa adicionada com sucesso')
              handleLoadWorks()
              navigation.goBack()
            },
          },
        }),
      )
    },
    [navigation, reduxDispatch],
  )

  return (
    <Containers.Main>
      <Header>
        <HeaderContent>
          <Title>Adicionar tarefa</Title>
        </HeaderContent>
      </Header>
      <WorkForm isLoading={isLoading} onSubmit={handleCreateWork} />
    </Containers.Main>
  )
}

export default WorkCreate
