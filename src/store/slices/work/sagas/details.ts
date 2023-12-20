import { PayloadAction } from '@reduxjs/toolkit'
import { IDetailsWorkRequestAction } from '../reducers/details/request'
import { call, put } from 'redux-saga/effects'
import { workActions } from '..'
import AxiosClient from '@services/httpClient'
import IWork from 'src/models/Work'
import { AxiosResponse } from 'axios'

function* details(action: PayloadAction<IDetailsWorkRequestAction>) {
  try {
    const httpClient = AxiosClient.get()

    const response: AxiosResponse<IWork> = yield call(
      httpClient.get,
      `http://localhost:3333/works/${action.payload.data.id}`,
    )

    yield put(
      workActions.detailsSuccess({
        data: response.data,
      }),
    )
  } catch (error) {
    yield put(workActions.detailsFailure())
  }
}

export default details
