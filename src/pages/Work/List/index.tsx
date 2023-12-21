/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef } from 'react'

import { useReduxDispatch } from '@hooks/useReduxDispatch'
import { useReduxSelector } from '@hooks/useReduxSelector'
import colors from '@styles/colors'
import Containers from '@styles/containers'
import Utils from '@styles/utils'
import Feather from 'react-native-vector-icons/Feather'
import ComponentError from '@components/utils/Error'
import ComponentIsVisible from '@components/utils/IsVisible'
 
import helpers from '@helpers/index'

import Empty from './Empty'
import Item from './Item'
import { dataLoading, IDataLoading } from './Loading'
import { ButtonContainer, FullButton, FullButtonText, OptionsButton } from './styles'
import workSelectors from '@store/slices/work/selectors'
import { workActions } from '@store/slices/work'
import IWork from 'src/models/Work'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PublicStackParamList } from '@routes/public.routes'
import Filter, { IFilterRefProps } from './Filter'

const List: React.FC = () => {
  const reduxDispatch = useReduxDispatch()
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>()

  const errorMessage = useReduxSelector(workSelectors.getAllErrorMessage)
  const emptyMessage = useReduxSelector(workSelectors.getAllEmptyMessage)
  const works = useReduxSelector(workSelectors.getAllList)
  const isLoading = useReduxSelector(workSelectors.getAllIsLoading)
  const status = useReduxSelector(workSelectors.filterSearchStatus)
  const title = useReduxSelector(workSelectors.filterSearchTitle)

  const filterRef = useRef<IFilterRefProps>(null)

  const handleCreateWork = useCallback(() => {
    navigation.navigate('WorkCreate')
  }, [navigation])

  const handleOpenFilter = useCallback(() => {
    filterRef.current?.open()
  }, [])

  const handleLoadWork = useCallback(() => {
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
  }, [reduxDispatch, title, status])

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
           <OptionsButton onPress={handleOpenFilter}>
              <Feather color={colors.blue500} name="filter" size={22} />
          </OptionsButton>
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

        <Filter ref={filterRef} />
      </Containers.SafeArea>
    </Containers.Main>
  )
}

export default List
