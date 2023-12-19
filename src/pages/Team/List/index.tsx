import React, {useCallback, useEffect} from 'react';

import {useReduxDispatch} from '@hooks/useReduxDispatch';
import {useReduxSelector} from '@hooks/useReduxSelector';
import {teamActions} from '@store/slices/team';
import teamSelectors from '@store/slices/team/selectors';
import colors from '@styles/colors';
import Containers from '@styles/containers';
import Utils from '@styles/utils';
import ITeam from 'src/models/Team';

import ComponentError from '@components/utils/Error';
import ComponentIsVisible from '@components/utils/IsVisible';

import helpers from '@helpers/index';

import Empty from './Empty';
import Item from './Item';
import {dataLoading, IDataLoading} from './Loading';

const List: React.FC = () => {
  const reduxDispatch = useReduxDispatch();

  const errorMessage = useReduxSelector(teamSelectors.getAllErrorMessage);
  const emptyMessage = useReduxSelector(teamSelectors.getAllEmptyMessage);
  const teams = useReduxSelector(teamSelectors.getAllList);
  const isLoading = useReduxSelector(teamSelectors.getAllIsLoading);

  const handleTeams = useCallback(() => {
    reduxDispatch(
      teamActions.getAllRequest({
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
    handleTeams();
  }, [handleTeams]);

  return (
    <Containers.Main>
      <Containers.SafeArea>
        <ComponentIsVisible when={!errorMessage}>
          <Containers.FlatList<ITeam | IDataLoading>
            contentContainerStyle={{
              backgroundColor: colors.mainBackground,
              flexGrow: 1,
              paddingBottom: 40,
            }}
            data={isLoading ? dataLoading : teams}
            ItemSeparatorComponent={Utils.Separator}
            keyExtractor={(item, index) => String(index)}
            ListEmptyComponent={<Empty message={emptyMessage} />}
            renderItem={({item: team}) => (
              <Item isLoading={isLoading} team={team as ITeam} />
            )}
          />
        </ComponentIsVisible>
        <ComponentIsVisible when={!!errorMessage}>
          <ComponentError tryAgain={handleTeams} />
        </ComponentIsVisible>
      </Containers.SafeArea>
    </Containers.Main>
  );
};

export default List;
