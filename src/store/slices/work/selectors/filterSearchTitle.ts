import { type ReduxStore } from '../../../types';

function filterSearchTitle(state: ReduxStore): string | undefined {
  return state.work.filter.search.title;
}

export default filterSearchTitle;
