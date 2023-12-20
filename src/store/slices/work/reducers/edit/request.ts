/* eslint-disable @typescript-eslint/no-unused-vars */
import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IWorkData } from '../..'

export interface IEditWorkRequestAction {
  data: {
    id: number
    title: string
    description: string
    status: string
  }
  functions: {
    success: (message: string) => void
  }
}

function editRequest(
  draft: Draft<IWorkData>,
  _: PayloadAction<IEditWorkRequestAction>,
) {
  draft.edit.config.isLoading = true
}

export default editRequest
