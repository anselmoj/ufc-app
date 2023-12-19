import {Draft, PayloadAction} from '@reduxjs/toolkit';

import {IFightersData} from '../..';

export interface IDetailsFighterRequestAction {
  data: {
    id: number;
  };
  functions: {
    error: (err: any) => void;
  };
}

function detailsRequest(
  draft: Draft<IFightersData>,
  _: PayloadAction<IDetailsFighterRequestAction>,
) {
  draft.details.config.isLoading = true;
  draft.details.data = null;
}

export default detailsRequest;
