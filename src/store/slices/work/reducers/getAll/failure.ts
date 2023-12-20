import { Draft } from '@reduxjs/toolkit'

import { IWorkData } from '../..'

function getAllFailure(draft: Draft<IWorkData>) {
  draft.getAll.config.isLoading = false
  draft.getAll.config.errorMessage = 'Falha ao consultar as tarefas'
}

export default getAllFailure
