import {ReduxStore} from '@store/types';

function getAllEmptyMessage(state: ReduxStore): string {
  return state.team.getAll.config.emptyMessage;
}

export default getAllEmptyMessage;
