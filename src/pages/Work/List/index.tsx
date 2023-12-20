/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect } from 'react'

import { useReduxDispatch } from '@hooks/useReduxDispatch'
import { useReduxSelector } from '@hooks/useReduxSelector'
import colors from '@styles/colors'
import Containers from '@styles/containers'
import Utils from '@styles/utils'

import ComponentError from '@components/utils/Error'
import ComponentIsVisible from '@components/utils/IsVisible'

import helpers from '@helpers/index'

import Empty from './Empty'
import Item from './Item'
import { dataLoading, IDataLoading } from './Loading'
import { ButtonContainer, FullButton, FullButtonText } from './styles'
import workSelectors from '@store/slices/work/selectors'
import { workActions } from '@store/slices/work'
import IWork from 'src/models/Work'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PublicStackParamList } from '@routes/public.routes'

const List: React.FC = () => {
  const reduxDispatch = useReduxDispatch()
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>()

  const errorMessage = useReduxSelector(workSelectors.getAllErrorMessage)
  const emptyMessage = useReduxSelector(workSelectors.getAllEmptyMessage)
  const works = useReduxSelector(workSelectors.getAllList)
  const isLoading = useReduxSelector(workSelectors.getAllIsLoading)

  const handleCreateWork = useCallback(() => {
    navigation.navigate('WorkCreate')
  }, [navigation])

  const handleLoadWork = useCallback(() => {
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

  useEffect(() => {
    handleLoadWork()
  }, [handleLoadWork])

  return (
    <Containers.Main>
      <Containers.SafeArea>
        <ComponentIsVisible when={!errorMessage}>
          <ButtonContainer>
            <FullButton onPress={() => handleCreateWork()}>
              <FullButtonText>Adicionar tarefa</FullButtonText>
            </FullButton>
          </ButtonContainer>
          <Containers.FlatList<IWork | IDataLoading>
            contentContainerStyle={{
              backgroundColor: colors.mainBackground,
              flexGrow: 1,
              paddingBottom: 40,
            }}
            data={isLoading ? dataLoading : works}
            ItemSeparatorComponent={Utils.Separator}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={<Empty message={emptyMessage} />}
            renderItem={({ item: fighter }) => (
              <Item isLoading={isLoading} item={fighter as IWork} />
            )}
          />
        </ComponentIsVisible>
        <ComponentIsVisible when={!!errorMessage}>
          <ComponentError tryAgain={handleLoadWork} />
        </ComponentIsVisible>
      </Containers.SafeArea>
    </Containers.Main>
  )
}

export default List
