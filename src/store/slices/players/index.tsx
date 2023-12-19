import {createSlice} from '@reduxjs/toolkit';
import IPlayer from 'src/models/Player';

import reducers from './reducers';

export interface IPlayersData {
  getAll: {
    config: {
      emptyMessage: string;
      errorMessage: string;
      isLoading: boolean;
      key: string;
    };
    list: IPlayer[];
  };
}

const initialState: IPlayersData = {
  getAll: {
    config: {
      key: '12a088f4558445b9bf9f170a7cc5a5c8',
      emptyMessage: 'Nenhum jogador encontrado',
      errorMessage: '',
      isLoading: false,
    },
    list: [],
  },
};

const playerSlice = createSlice({
  name: '@player',
  initialState,
  reducers,
});

export const playerActions = playerSlice.actions;
export const playerReducers = playerSlice.reducer;
