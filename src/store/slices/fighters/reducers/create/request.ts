import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { IFightersData } from '../..'

export interface ICreateFighterRequestAction {
  data: {
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
  functions: {
    success: (message: string) => void
  }
}

function createRequest(
  draft: Draft<IFightersData>,
  _: PayloadAction<ICreateFighterRequestAction>,
) {
  draft.create.config.isLoading = true
}

export default createRequest
