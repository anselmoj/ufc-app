import { createSlice } from '@reduxjs/toolkit'

import reducers from './reducers'
import IWork from 'src/models/Work'

export interface IWorkData {
  getAll: {
    config: {
      emptyMessage: string
      errorMessage: string
      isLoading: boolean
    }
    list: IWork[]
  }
  create: {
    config: {
      isLoading: boolean
    }
  }
}

const initialState: IWorkData = {
  getAll: {
    config: {
      emptyMessage: 'Nenhuma tarefa encontrada',
      errorMessage: '',
      isLoading: false,
    },
    list: [],
  },
  create: {
    config: {
      isLoading: false,
    },
  },
}

const workSlice = createSlice({
  name: '@work',
  initialState,
  reducers,
})

export const workActions = workSlice.actions
export const workReducers = workSlice.reducer
