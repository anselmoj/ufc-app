import {Draft} from '@reduxjs/toolkit';

import {IFightersData} from '../..';

function detailsFailure(draft: Draft<IFightersData>) {
  draft.details.config.isLoading = false;
}

export default detailsFailure;
