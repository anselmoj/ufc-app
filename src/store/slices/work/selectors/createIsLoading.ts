import { ReduxStore } from '@store/types'

function crateIsLoading(state: ReduxStore): boolean {
  return state.work.create.config.isLoading
}

export default crateIsLoading
