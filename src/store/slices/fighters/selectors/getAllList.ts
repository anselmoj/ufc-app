import {ReduxStore} from '@store/types';
import IFighter from 'src/models/Fighter';

function getAllList(state: ReduxStore): IFighter[] {
  return state.fighter.getAll.list;
}

export default getAllList;
