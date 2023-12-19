import {ReduxStore} from '@store/types';
import IPlayer from 'src/models/Player';

function getAllList(state: ReduxStore): IPlayer[] {
  return state.player.getAll.list;
}

export default getAllList;
