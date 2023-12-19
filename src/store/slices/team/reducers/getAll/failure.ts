import {Draft} from '@reduxjs/toolkit';

import {ITeamsData} from '../../index';

function getAllFailure(draft: Draft<ITeamsData>) {
  draft.getAll.config.isLoading = false;
  draft.getAll.config.errorMessage = 'Falha ao consultar os times';
}

export default getAllFailure;
