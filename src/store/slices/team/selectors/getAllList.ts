import {ReduxStore} from '@store/types';
import ITeam from 'src/models/Team';

function getAllList(state: ReduxStore): ITeam[] {
  return state.team.getAll.list;
}

export default getAllList;
