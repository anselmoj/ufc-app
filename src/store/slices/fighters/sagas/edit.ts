import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'

import AxiosClient from '@services/httpClient'
import IPutFighter from '@services/httpClient/request/fighter/IPutFighter'

import { fighterActions } from '../index'
import { IEditFighterRequestAction } from '../reducers/edit/request'

function* edit(action: PayloadAction<IEditFighterRequestAction>) {
  try {
    const httpClient = AxiosClient.get()

    const body: IPutFighter = {
      id: action.payload.data.id,
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

    yield call(
      httpClient.put,
      `http://localhost:3333/fighters/${action.payload.data.id}`,
      body,
    )

    yield put(fighterActions.editSuccess())
    action.payload.functions.success('Lutador editado com sucesso')
  } catch (err) {
    yield put(fighterActions.editFailure())
  }
}

export default edit
