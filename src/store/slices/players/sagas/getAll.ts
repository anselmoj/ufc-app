import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put} from 'redux-saga/effects';
import IPlayer from 'src/models/Player';

import AxiosClient from '@services/httpClient';
import IGetTeamRequest from '@services/httpClient/request/team/IGetTeamRequest';

import {playerActions} from '../index';
import {IGetAllPlayerRequestAction} from '../reducers/getAll/request';

function* getAll(action: PayloadAction<IGetAllPlayerRequestAction>) {
  try {
    const httpClient = AxiosClient.get();

    const params: IGetTeamRequest = {
      key: action.payload.data.key,
    };

    const response: AxiosResponse<IPlayer[]> = yield call(
      httpClient.get,
      'https://replay.sportsdata.io/api/v3/nba/stats/json/players',
      {
        params,
      },
    );

    if (!response.data.length) {
      yield put(
        playerActions.getAllSuccessWithoutData({
          message: 'Nenhum jogador encontrado',
        }),
      );
      return;
    }
    yield put(
      playerActions.getAllSuccessWithData({
        list: response.data,
      }),
    );
  } catch (error) {
    action.payload.functions.errors(error);
    yield put(playerActions.getAllFailure());
  }
}

export default getAll;
