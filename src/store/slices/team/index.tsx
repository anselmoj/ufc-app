import {createSlice} from '@reduxjs/toolkit';
import ITeam from 'src/models/Team';

import reducers from './reducers';

export interface ITeamsData {
  getAll: {
    config: {
      emptyMessage: string;
      errorMessage: string;
      isLoading: boolean;
      key: string;
    };
    list: ITeam[];
  };
}

const initialState: ITeamsData = {
  getAll: {
    config: {
      key: '12a088f4558445b9bf9f170a7cc5a5c8',
      emptyMessage: 'Nenhum time encontrado',
      errorMessage: '',
      isLoading: false,
    },
    list: [],
  },
};

const teamSlice = createSlice({
  name: '@team',
  initialState,
  reducers,
});

export const teamActions = teamSlice.actions;
export const teamReducers = teamSlice.reducer;
