import {Draft, PayloadAction} from '@reduxjs/toolkit';

import {IFightersData} from '../..';

export interface IGetAllSuccessWithoutDataAction {
  message: string;
}

function getAllSuccessWithoutData(
  draft: Draft<IFightersData>,
  action: PayloadAction<IGetAllSuccessWithoutDataAction>,
) {
  draft.getAll.config.isLoading = false;
  draft.getAll.config.emptyMessage = action.payload.message;
}

export default getAllSuccessWithoutData;
