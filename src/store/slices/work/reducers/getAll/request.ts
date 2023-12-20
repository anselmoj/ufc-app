/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IWorkData } from '../..'

export interface IGetAllWorkRequestAction {
  functions: {
    errors: (err: any) => void
  }
}

function getAllRequest(
  draft: Draft<IWorkData>,
  _: PayloadAction<IGetAllWorkRequestAction>,
) {
  draft.getAll.config.emptyMessage = ''
  draft.getAll.config.errorMessage = ''
  draft.getAll.config.isLoading = true
  draft.getAll.list = []
}

export default getAllRequest
