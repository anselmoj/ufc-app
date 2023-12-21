import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { call, put } from 'redux-saga/effects'

import AxiosClient from '@services/httpClient'

import { workActions } from '../index'
import { IGetAllWorkRequestAction } from '../reducers/getAll/request'
import IWork from 'src/models/Work'
import IGetWork from '@services/httpClient/request/work/IGetWork'

function* getAll(action: PayloadAction<IGetAllWorkRequestAction>) {
  try {
    const httpClient = AxiosClient.get()

    const params: IGetWork = {
      status: action.payload.data.status ? action.payload.data.status : undefined,
      title: action.payload.data.title ? action.payload.data.title : undefined,
    }

    const response: AxiosResponse<IWork[]> = yield call(
      httpClient.get,
      'http://localhost:3333/works',
      {
        params
      }
    )

    if (!response.data.length) {
      yield put(
        workActions.getAllSuccessWithoutData({
          message: 'Nenhuma tarefa encontrado',
        }),
      )
      return
    }
    yield put(
      workActions.getAllSuccessWithData({
        list: response.data,
      }),
    )
  } catch (error) {
    action.payload.functions.errors(error)
    yield put(workActions.getAllFailure())
  }
}

export default getAll
