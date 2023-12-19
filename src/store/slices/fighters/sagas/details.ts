import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put} from 'redux-saga/effects';
import IFighter from 'src/models/Fighter';

import AxiosClient from '@services/httpClient';

import {fighterActions} from '../index';
import {IDetailsFighterRequestAction} from '../reducers/details/request';

function* details(action: PayloadAction<IDetailsFighterRequestAction>) {
  try {
    const httpClient = AxiosClient.get();

    const response: AxiosResponse<IFighter> = yield call(
      httpClient.get,
      `http://localhost:3333/fighters/${action.payload.data.id}`,
    );

    yield put(
      fighterActions.detailsSuccess({
        data: response.data,
      }),
    );
  } catch (err) {
    yield put(fighterActions.detailsFailure());
  }
}

export default details;
