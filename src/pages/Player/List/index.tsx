import React, {useCallback, useEffect} from 'react';

import {useReduxDispatch} from '@hooks/useReduxDispatch';
import {useReduxSelector} from '@hooks/useReduxSelector';
import {playerActions} from '@store/slices/players';
import playerSelectors from '@store/slices/players/selectors';
import colors from '@styles/colors';
import Containers from '@styles/containers';
import Utils from '@styles/utils';
import IPlayer from 'src/models/Player';

import ComponentError from '@components/utils/Error';
import ComponentIsVisible from '@components/utils/IsVisible';

import helpers from '@helpers/index';

import Empty from './Empty';
import Item from './Item';
import {dataLoading, IDataLoading} from './Loading';

const List: React.FC = () => {
  const reduxDispatch = useReduxDispatch();

  const errorMessage = useReduxSelector(playerSelectors.getAllErrorMessage);
  const emptyMessage = useReduxSelector(playerSelectors.getAllEmptyMessage);
  const players = useReduxSelector(playerSelectors.getAllList);
  const isLoading = useReduxSelector(playerSelectors.getAllIsLoading);

  const handlePlayers = useCallback(() => {
    reduxDispatch(
      playerActions.getAllRequest({
        data: {
          key: '12a088f4558445b9bf9f170a7cc5a5c8',
        },
        functions: {
          errors: (err: any) => {
            helpers.errorHandling(err);
          },
        },
      }),
    );
  }, [reduxDispatch]);

  useEffect(() => {
    handlePlayers();
  }, [handlePlayers]);

  return (
    <Containers.Main>
      <Containers.SafeArea>
        <ComponentIsVisible when={!errorMessage}>
          <Containers.FlatList<IPlayer | IDataLoading>
            contentContainerStyle={{
              backgroundColor: colors.mainBackground,
              flexGrow: 1,
              paddingBottom: 40,
            }}
            data={isLoading ? dataLoading : players}
            ItemSeparatorComponent={Utils.Separator}
            keyExtractor={(item, index) => String(index)}
            ListEmptyComponent={<Empty message={emptyMessage} />}
            renderItem={({item: player}) => (
              <Item isLoading={isLoading} player={player as IPlayer} />
            )}
          />
        </ComponentIsVisible>
        <ComponentIsVisible when={!!errorMessage}>
          <ComponentError tryAgain={handlePlayers} />
        </ComponentIsVisible>
      </Containers.SafeArea>
    </Containers.Main>
  );
};

export default List;
