import {Draft, PayloadAction} from '@reduxjs/toolkit';

import {IPlayersData} from '../../index';

export interface IGetAllSuccessWithoutDataAction {
  message: string;
}

function getAllSuccessWithoutData(
  draft: Draft<IPlayersData>,
  action: PayloadAction<IGetAllSuccessWithoutDataAction>,
) {
  draft.getAll.config.isLoading = false;
  draft.getAll.config.emptyMessage = action.payload.message;
}

export default getAllSuccessWithoutData;
