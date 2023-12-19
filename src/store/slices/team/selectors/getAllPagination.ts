import {ReduxStore} from '@store/types';

import {IPagination} from '..';

function getAllPagination(state: ReduxStore): IPagination {
  return state.team.getAll.config.pagination;
}

export default getAllPagination;
