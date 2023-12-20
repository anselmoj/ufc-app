import { ReduxStore } from '../../../types'
import IWork from 'src/models/Work'

function details(state: ReduxStore): IWork | null {
  return state.work.details.data
}
export default details
