import { ReduxStore } from '@store/types'

function getAllIsLoading(state: ReduxStore): boolean {
  return state.fighter.getAll.config.isLoading
}

export default getAllIsLoading
