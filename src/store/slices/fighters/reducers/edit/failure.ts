import {Draft} from '@reduxjs/toolkit';

import {IFightersData} from '../..';

function editFailure(draft: Draft<IFightersData>) {
  draft.edit.config.isLoading = false;
}

export default editFailure;
