import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IWorkData } from '../..'
import IWork from 'src/models/Work'

export interface IGetAllSuccessWithDataAction {
  list: IWork[]
}

function getAllSuccessWithData(
  draft: Draft<IWorkData>,
  action: PayloadAction<IGetAllSuccessWithDataAction>,
) {
  draft.getAll.config.isLoading = false
  draft.getAll.list = action.payload.list
}

export default getAllSuccessWithData
