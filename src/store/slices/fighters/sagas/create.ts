import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'

import AxiosClient from '@services/httpClient'
import IPostCreateFighter from '@services/httpClient/request/fighter/IPostCreateFighter'

import { fighterActions } from '../index'
import { ICreateFighterRequestAction } from '../reducers/create/request'

function* create(action: PayloadAction<ICreateFighterRequestAction>) {
  try {
    const httpClient = AxiosClient.get()

    const body: IPostCreateFighter = {
      name: action.payload.data.name,
      academy: action.payload.data.academy,
      category: action.payload.data.category,
      city: action.payload.data.city,
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

    yield call(httpClient.post, 'http://localhost:3333/fighters', body)

    yield put(fighterActions.createSuccess())
    action.payload.functions.success('Lutador criado com sucesso')
  } catch (err) {
    yield put(fighterActions.createFailure())
  }
}

export default create
