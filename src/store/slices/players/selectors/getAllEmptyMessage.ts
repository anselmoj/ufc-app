import {ReduxStore} from '@store/types';

function getAllEmptyMessage(state: ReduxStore): string {
  return state.player.getAll.config.emptyMessage;
}

export default getAllEmptyMessage;
