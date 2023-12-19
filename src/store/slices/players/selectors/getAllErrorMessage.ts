import {ReduxStore} from '@store/types';

function getAllErrorMessage(state: ReduxStore): string {
  return state.player.getAll.config.errorMessage;
}

export default getAllErrorMessage;
