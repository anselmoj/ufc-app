import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IFightersData } from '../..'

export interface IDetailsSuccessAction {
  data: {
    id: number
    name: string
    category: string
    academy: string
    position: string
    city: string
  }
}

function detailsSuccess(
  draft: Draft<IFightersData>,
  action: PayloadAction<IDetailsSuccessAction>,
) {
  draft.details.config.isLoading = false
  draft.details.data = {
    academy: action.payload.data.academy,
    category: action.payload.data.category,
    city: action.payload.data.city,
    id: action.payload.data.id,
    name: action.payload.data.name,
    position: action.payload.data.position,
  }
}

export default detailsSuccess
