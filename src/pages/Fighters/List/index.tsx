import React, {useCallback, useEffect} from 'react';

import {useReduxDispatch} from '@hooks/useReduxDispatch';
import {useReduxSelector} from '@hooks/useReduxSelector';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PublicStackParamList} from '@routes/public.routes';
import {fighterActions} from '@store/slices/fighters';
import fighterSelectors from '@store/slices/fighters/selectors';
import colors from '@styles/colors';
import Containers from '@styles/containers';
import Utils from '@styles/utils';
import IFighter from 'src/models/Fighter';

import ComponentError from '@components/utils/Error';
import ComponentIsVisible from '@components/utils/IsVisible';

import helpers from '@helpers/index';

import Empty from './Empty';
import Item from './Item';
import {dataLoading, IDataLoading} from './Loading';
import {ButtonContainer, FullButton, FullButtonText} from './styles';

const List: React.FC = () => {
  const reduxDispatch = useReduxDispatch();
  const navigation = useNavigation<NavigationProp<PublicStackParamList>>();

  const errorMessage = useReduxSelector(fighterSelectors.getAllErrorMessage);
  const emptyMessage = useReduxSelector(fighterSelectors.getAllEmptyMessage);
  const fighters = useReduxSelector(fighterSelectors.getAllList);
  const isLoading = useReduxSelector(fighterSelectors.getAllIsLoading);

  const handleAddFighter = useCallback(() => {
    navigation.navigate('FighterCreate');
  }, [navigation]);

  const handleFighters = useCallback(() => {
    reduxDispatch(
      fighterActions.getAllRequest({
        functions: {
          errors: (err: any) => {
            helpers.errorHandling(err);
          },
        },
      }),
    );
  }, [reduxDispatch]);

  useEffect(() => {
    handleFighters();
  }, [handleFighters]);

  return (
    <Containers.Main>
      <Containers.SafeArea>
        <ComponentIsVisible when={!errorMessage}>
          <ButtonContainer>
            <FullButton onPress={() => handleAddFighter()}>
              <FullButtonText>Adicionar lutador</FullButtonText>
            </FullButton>
          </ButtonContainer>
          <Containers.FlatList<IFighter | IDataLoading>
            contentContainerStyle={{
              backgroundColor: colors.mainBackground,
              flexGrow: 1,
              paddingBottom: 40,
            }}
            data={isLoading ? dataLoading : fighters}
            ItemSeparatorComponent={Utils.Separator}
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={<Empty message={emptyMessage} />}
            renderItem={({item: fighter}) => (
              <Item isLoading={isLoading} item={fighter as IFighter} />
            )}
          />
        </ComponentIsVisible>
        <ComponentIsVisible when={!!errorMessage}>
          <ComponentError tryAgain={handleFighters} />
        </ComponentIsVisible>
      </Containers.SafeArea>
    </Containers.Main>
  );
};

export default List;
