import { ReduxStore } from '@store/types'

function editIsLoading(state: ReduxStore): boolean {
  return state.fighter.edit.config.isLoading
}

export default editIsLoading
