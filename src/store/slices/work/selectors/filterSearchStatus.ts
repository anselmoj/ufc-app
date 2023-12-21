import { type ReduxStore } from '../../../types';

function filterSearchStatus(state: ReduxStore): string | undefined {
  return state.work.filter.search.status;
}

export default filterSearchStatus;
