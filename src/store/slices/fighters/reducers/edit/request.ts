import {Draft, PayloadAction} from '@reduxjs/toolkit';

import {IFightersData} from '../..';

export interface IEditFighterRequestAction {
  data: {
    id: number;
    name: string;
    category: string;
    city: string;
    academy: string;
    position: string;
  };
  functions: {
    success: (message: string) => void;
  };
}

function editRequest(
  draft: Draft<IFightersData>,
  _: PayloadAction<IEditFighterRequestAction>,
) {
  draft.edit.config.isLoading = true;
}

export default editRequest;
