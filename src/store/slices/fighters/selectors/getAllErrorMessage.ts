import {ReduxStore} from '@store/types';

function getAllErrorMessage(state: ReduxStore): string {
  return state.fighter.getAll.config.errorMessage;
}

export default getAllErrorMessage;
