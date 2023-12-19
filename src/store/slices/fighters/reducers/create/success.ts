import {Draft} from '@reduxjs/toolkit';

import {IFightersData} from '../..';

function createSuccess(draft: Draft<IFightersData>) {
  draft.create.config.isLoading = false;
}

export default createSuccess;
