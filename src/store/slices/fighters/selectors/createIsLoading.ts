import { ReduxStore } from '@store/types'

function createIsLoading(state: ReduxStore): boolean {
  return state.fighter.create.config.isLoading
}

export default createIsLoading
