import { ReduxStore } from '@store/types'

function getAllErrorMessage(state: ReduxStore): string {
  return state.work.getAll.config.errorMessage
}

export default getAllErrorMessage
