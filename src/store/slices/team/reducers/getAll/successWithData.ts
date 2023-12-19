import {Draft, PayloadAction} from '@reduxjs/toolkit';
import ITeam from 'src/models/Team';

import {ITeamsData} from '../..';

export interface IGetAllSuccessWithDataAction {
  list: ITeam[];
}

function getAllSuccessWithData(
  draft: Draft<ITeamsData>,
  action: PayloadAction<IGetAllSuccessWithDataAction>,
) {
  draft.getAll.config.isLoading = false;
  draft.getAll.list = action.payload.list;
}

export default getAllSuccessWithData;
