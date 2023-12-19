import {ReduxStore} from '@store/types';

function getAllEmptyMessage(state: ReduxStore): string {
  return state.fighter.getAll.config.emptyMessage;
}

export default getAllEmptyMessage;
