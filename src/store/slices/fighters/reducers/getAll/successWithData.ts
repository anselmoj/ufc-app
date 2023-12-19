import {Draft, PayloadAction} from '@reduxjs/toolkit';
import IFighter from 'src/models/Fighter';

import {IFightersData} from '../..';

export interface IGetAllSuccessWithDataAction {
  list: IFighter[];
}

function getAllSuccessWithData(
  draft: Draft<IFightersData>,
  action: PayloadAction<IGetAllSuccessWithDataAction>,
) {
  draft.getAll.config.isLoading = false;
  draft.getAll.list = action.payload.list;
}

export default getAllSuccessWithData;
