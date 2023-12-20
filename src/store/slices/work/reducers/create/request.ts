import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IWorkData } from '../..'

export interface ICreateWorkRequestAction {
  data: {
    title: string
    description: string
    status: string
  }
  functions: {
    success: (message: string) => void
  }
}

function createRequest(
  draft: Draft<IWorkData>,
  _: PayloadAction<ICreateWorkRequestAction>,
) {
  draft.create.config.isLoading = true
}

export default createRequest
