import {ReduxStore} from '@store/types';

function getAllIsLoading(state: ReduxStore): boolean {
  return state.player.getAll.config.isLoading;
}

export default getAllIsLoading;
