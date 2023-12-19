import {Draft} from '@reduxjs/toolkit';

import {IFightersData} from '../..';

function getAllFailure(draft: Draft<IFightersData>) {
  draft.getAll.config.isLoading = false;
  draft.getAll.config.errorMessage = 'Falha ao consultar os lutadores';
}

export default getAllFailure;
