import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IWorkData } from '../..'

export interface IGetAllSuccessWithoutDataAction {
  message: string
}

function getAllSuccessWithoutData(
  draft: Draft<IWorkData>,
  action: PayloadAction<IGetAllSuccessWithoutDataAction>,
) {
  draft.getAll.config.isLoading = false
  draft.getAll.config.emptyMessage = action.payload.message
}

export default getAllSuccessWithoutData
