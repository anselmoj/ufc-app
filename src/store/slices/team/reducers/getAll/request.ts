import {Draft, PayloadAction} from '@reduxjs/toolkit';

import {ITeamsData} from '../../index';

export interface IGetAllTeamRequestAction {
  data: {
    key: string;
  };
  functions: {
    errors: (err: any) => void;
  };
}

function getAllRequest(
  draft: Draft<ITeamsData>,
  action: PayloadAction<IGetAllTeamRequestAction>,
) {
  draft.getAll.config.emptyMessage = '';
  draft.getAll.config.errorMessage = '';
  draft.getAll.config.isLoading = true;
  draft.getAll.config.key = action.payload.data.key;
  draft.getAll.list = [];
}

export default getAllRequest;
