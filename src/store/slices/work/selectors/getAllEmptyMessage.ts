import { ReduxStore } from '@store/types'

function getAllEmptyMessage(state: ReduxStore): string {
  return state.work.getAll.config.emptyMessage
}

export default getAllEmptyMessage
