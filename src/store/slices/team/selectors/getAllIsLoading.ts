import {ReduxStore} from '@store/types';

function getAllIsLoading(state: ReduxStore): boolean {
  return state.team.getAll.config.isLoading;
}

export default getAllIsLoading;
