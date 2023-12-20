import { PayloadAction } from '@reduxjs/toolkit'
import { call, put } from 'redux-saga/effects'

import AxiosClient from '@services/httpClient'

import { workActions } from '../index'
import { ICreateWorkRequestAction } from '../reducers/create/request'
import IPostWork from '@services/httpClient/request/work/IPostWork'

function* create(action: PayloadAction<ICreateWorkRequestAction>) {
  try {
    const httpClient = AxiosClient.get()

    const body: IPostWork = {
      title: action.payload.data.title,
      description: action.payload.data.description,
      status: action.payload.data.status,
    }

    yield call(httpClient.post, 'http://localhost:3333/works', body)

    yield put(workActions.createSuccess())
    action.payload.functions.success('Tarefa criada com sucesso')
  } catch (err) {
    yield put(workActions.createFailure())
  }
}

export default create
