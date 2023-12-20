import { ReduxStore } from '@store/types'
import IWork from 'src/models/Work'

function getAllList(state: ReduxStore): IWork[] {
  return state.work.getAll.list
}

export default getAllList
