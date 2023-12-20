/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from '@reduxjs/toolkit'
import AxiosClient from '@services/httpClient'
import IPutWork from '@services/httpClient/request/work/IPutWork'
import { IEditWorkRequestAction } from '../reducers/edit/request'
import { call, put } from 'redux-saga/effects'
import { workActions } from '..'

function* edit(action: PayloadAction<IEditWorkRequestAction>) {
  try {
    const httpClient = AxiosClient.get()

    const body: IPutWork = {
      id: action.payload.data.id,
      description: action.payload.data.description,
      status: action.payload.data.status,
      title: action.payload.data.title,
    }

    yield call(
      httpClient.put,
      `http://localhost:3333/works/${action.payload.data.id}`,
      body,
    )

    yield put(workActions.editSuccess())
    action.payload.functions.success('Tarefa editada com sucesso')
  } catch (error) {
    yield put(workActions.editFailure())
  }
}

export default edit
