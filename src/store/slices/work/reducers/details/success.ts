import { Draft, PayloadAction } from '@reduxjs/toolkit'
import { IWorkData } from '../..'

export interface IDetailsSuccessAction {
  data: {
    id: number
    title: string
    description: string
    status: string
  }
}

function detailsSuccess(
  draft: Draft<IWorkData>,
  action: PayloadAction<IDetailsSuccessAction>,
) {
  draft.details.config.isLoading = false
  draft.details.data = {
    description: action.payload.data.description,
    id: action.payload.data.id,
    status: action.payload.data.status,
    title: action.payload.data.title,
  }
}

export default detailsSuccess
