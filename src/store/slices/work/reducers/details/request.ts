import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IWorkData } from '../..'

export interface IDetailsWorkRequestAction {
  data: {
    id: number
  }
  functions: {
    error: (err: any) => void
  }
}

function detailsRequest(
  draft: Draft<IWorkData>,
  _: PayloadAction<IDetailsWorkRequestAction>,
) {
  draft.details.config.isLoading = true
  draft.details.data = null
}

export default detailsRequest
