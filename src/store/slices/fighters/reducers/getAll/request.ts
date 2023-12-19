import {Draft, PayloadAction} from '@reduxjs/toolkit';

import {IFightersData} from '../..';

export interface IGetAllFightersRequestAction {
  functions: {
    errors: (err: any) => void;
  };
}

function getAllRequest(
  draft: Draft<IFightersData>,
  _: PayloadAction<IGetAllFightersRequestAction>,
) {
  draft.getAll.config.emptyMessage = '';
  draft.getAll.config.errorMessage = '';
  draft.getAll.config.isLoading = true;
  draft.getAll.list = [];
}

export default getAllRequest;
