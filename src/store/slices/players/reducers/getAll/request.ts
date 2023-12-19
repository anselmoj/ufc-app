import {Draft, PayloadAction} from '@reduxjs/toolkit';

import {IPlayersData} from '../../index';

export interface IGetAllPlayerRequestAction {
  data: {
    key: string;
  };
  functions: {
    errors: (err: any) => void;
  };
}

function getAllRequest(
  draft: Draft<IPlayersData>,
  action: PayloadAction<IGetAllPlayerRequestAction>,
) {
  draft.getAll.config.emptyMessage = '';
  draft.getAll.config.errorMessage = '';
  draft.getAll.config.isLoading = true;
  draft.getAll.config.key = action.payload.data.key;
  draft.getAll.list = [];
}

export default getAllRequest;
