import {ReduxStore} from '@store/types';

function getAllErrorMessage(state: ReduxStore): string {
  return state.team.getAll.config.errorMessage;
}

export default getAllErrorMessage;
