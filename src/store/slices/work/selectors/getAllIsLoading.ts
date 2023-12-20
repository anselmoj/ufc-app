import { ReduxStore } from '@store/types'

function getAllIsLoading(state: ReduxStore): boolean {
  return state.work.getAll.config.isLoading
}

export default getAllIsLoading
