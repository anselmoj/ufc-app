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
  edit: {
    config: {
      isLoading: boolean
    }
  }
  details: {
    config: {
      isLoading: boolean
    }
    data: IWork | null
  }
  filter: {
    search: {
      title?: string;
      status?: string;
    };
  };
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
  edit: {
    config: {
      isLoading: false,
    },
  },
  details: {
    config: {
      isLoading: false,
    },
    data: null,
  },
  filter: {
    search: {
      status: undefined,
      title: undefined,
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
