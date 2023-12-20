import { createSlice } from '@reduxjs/toolkit'
import IFighter from 'src/models/Fighter'

import reducers from './reducers'

export interface IFightersData {
  getAll: {
    config: {
      emptyMessage: string
      errorMessage: string
      isLoading: boolean
    }
    list: IFighter[]
  }
  create: {
    config: {
      isLoading: boolean
    }
  }
  edit: {
    config: {
      isLoading: boolean
    }
  }
  details: {
    config: {
      isLoading: boolean
    }
    data: IFighter | null
  }
}

const initialState: IFightersData = {
  getAll: {
    config: {
      emptyMessage: 'Nenhum lutador encontrado',
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
  edit: {
    config: {
      isLoading: false,
    },
  },
  details: {
    data: null,
    config: {
      isLoading: false,
    },
  },
}

const fighterSlice = createSlice({
  name: '@fighter',
  initialState,
  reducers,
})

export const fighterActions = fighterSlice.actions
export const fighterReducers = fighterSlice.reducer
