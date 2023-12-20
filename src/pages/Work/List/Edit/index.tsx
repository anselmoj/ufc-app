import Containers from '@styles/containers'
import { Header, HeaderContent, Title } from './styles'
import WorkForm, { SubmitFormData } from '../Form'
import { useReduxDispatch } from '@hooks/useReduxDispatch'
import { useCallback, useEffect } from 'react'
import { workActions } from '@store/slices/work'
import Toast from 'react-native-root-toast'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useReduxSelector } from '@hooks/useReduxSelector'
import workSelectors from '@store/slices/work/selectors'
import helpers from '@helpers/index'
import { WorkEditScreenRouteProp } from '@routes/public.routes'

const WorkEdit = () => {
  const reduxDispatch = useReduxDispatch()
  const navigation = useNavigation()
  const route = useRoute<WorkEditScreenRouteProp>()
  const work = useReduxSelector(workSelectors.details)
  const isLoading = useReduxSelector(workSelectors.editIsLoading)

  const handleWorkInfo = useCallback(() => {
    reduxDispatch(
      workActions.detailsRequest({
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

  const handleEditWork = useCallback(
    (data: SubmitFormData): void => {
      try {
        if (!work) {
          throw new Error('Error::WorkEdit::work')
        }
        reduxDispatch(
          workActions.editRequest({
            data: {
              id: work.id,
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
      } catch (error) {
        console.log(error)
      }
    },
    [handleLoadWorks, navigation, reduxDispatch, work],
  )

  useEffect(() => {
    handleWorkInfo()
  }, [handleWorkInfo])

  return (
    <Containers.Main>
      <Header>
        <HeaderContent>
          <Title>Editar tarefa</Title>
        </HeaderContent>
      </Header>
      <WorkForm
        initialData={{
          description: work?.description || '',
          status: work?.status || '',
          title: work?.title || '',
        }}
        isLoading={isLoading}
        onSubmit={handleEditWork}
      />
    </Containers.Main>
  )
}

export default WorkEdit
