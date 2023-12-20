import { ReduxStore } from '@store/types'

function editIsLoading(state: ReduxStore): boolean {
  return state.work.edit.config.isLoading
}

export default editIsLoading
