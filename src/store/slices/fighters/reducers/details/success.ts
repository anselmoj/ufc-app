import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IFightersData } from '../..'

export interface IDetailsSuccessAction {
  data: {
    id: number
    name: string
    category: string
    city: string
    academy: string
    ranking: string
    age: string
    height: string
    weight: string
    wins: string
    defeats: string
    finalization: string
    ko: string
    titleDefense: string
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
    ranking: action.payload.data.ranking,
    age: action.payload.data.age,
    defeats: action.payload.data.defeats,
    finalization: action.payload.data.finalization,
    height: action.payload.data.height,
    ko: action.payload.data.ko,
    titleDefense: action.payload.data.titleDefense,
    weight: action.payload.data.weight,
    wins: action.payload.data.wins,
  }
}

export default detailsSuccess
