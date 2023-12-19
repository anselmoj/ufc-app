import {Draft, PayloadAction} from '@reduxjs/toolkit';
import IPlayer from 'src/models/Player';

import {IPlayersData} from '../..';

export interface IGetAllSuccessWithDataAction {
  list: IPlayer[];
}

function getAllSuccessWithData(
  draft: Draft<IPlayersData>,
  action: PayloadAction<IGetAllSuccessWithDataAction>,
) {
  draft.getAll.config.isLoading = false;
  draft.getAll.list = action.payload.list;
}

export default getAllSuccessWithData;
