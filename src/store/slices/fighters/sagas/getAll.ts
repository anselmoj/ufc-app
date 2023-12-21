import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'
import IFighter from 'src/models/Fighter'

import AxiosClient from '@services/httpClient'

import { fighterActions } from '../index'
import { IGetAllFightersRequestAction } from '../reducers/getAll/request'

function* getAll(action: PayloadAction<IGetAllFightersRequestAction>) {
  try {
    const httpClient = AxiosClient.get()

    const response: AxiosResponse<IFighter[]> = yield call(
      httpClient.get,
      'http://localhost:3333/fighters',
    )

    if (!response.data.length) {
      yield put(
        fighterActions.getAllSuccessWithoutData({
          message: 'Nenhum lutador encontrado',
        }),
      )
      return
    }
    yield put(
      fighterActions.getAllSuccessWithData({
        list: response.data,
      }),
    )
  } catch (error) {
    action.payload.functions.errors(error)
    yield put(fighterActions.getAllFailure())
  }
}

export default getAll
