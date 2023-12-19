import {Draft} from '@reduxjs/toolkit';

import {IPlayersData} from '../../index';

function getAllFailure(draft: Draft<IPlayersData>) {
  draft.getAll.config.isLoading = false;
  draft.getAll.config.errorMessage = 'Falha ao consultar os jogadores';
}

export default getAllFailure;
