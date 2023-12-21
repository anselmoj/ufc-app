import Containers from '@styles/containers'
import { Header, HeaderContent, IconContent, Title } from './styles'
import WorkForm, { SubmitFormData } from '../Form'
import { useReduxDispatch } from '@hooks/useReduxDispatch'
import { useCallback } from 'react'
import { workActions } from '@store/slices/work'
import Toast from 'react-native-root-toast'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native'
import { useReduxSelector } from '@hooks/useReduxSelector'
import workSelectors from '@store/slices/work/selectors'
import helpers from '@helpers/index'
import colors from '@styles/colors'

const WorkCreate = () => {
  const reduxDispatch = useReduxDispatch()
  const navigation = useNavigation()
  const isLoading = useReduxSelector(workSelectors.crateIsLoading)
  const status = useReduxSelector(workSelectors.filterSearchStatus)
  const title = useReduxSelector(workSelectors.filterSearchTitle)

  const handleGoBack = useCallback(() => {
    navigation.goBack()
  }, [navigation])


  const handleLoadWorks = useCallback(() => {
    reduxDispatch(
      workActions.getAllRequest({
        data: {
          status: status ?? undefined,
          title: title ?? undefined,
        },
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
    [handleLoadWorks, navigation, reduxDispatch],
  )

  return (
    <Containers.Main>
      <Header>
        <IconContent onPress={() => handleGoBack()}>
          <EvilIcons color={colors.blue500} name='arrow-left' size={32} />
        </IconContent>
        <HeaderContent>
          <Title>Adicionar tarefa</Title>
        </HeaderContent>
      </Header>
      <WorkForm isLoading={isLoading} onSubmit={handleCreateWork} />
    </Containers.Main>
  )
}

export default WorkCreate
