import {PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {call, put} from 'redux-saga/effects';
import ITeam from 'src/models/Team';

import AxiosClient from '@services/httpClient';
import IGetTeamRequest from '@services/httpClient/request/team/IGetTeamRequest';

import {teamActions} from '../index';
import {IGetAllTeamRequestAction} from '../reducers/getAll/request';

function* getAll(action: PayloadAction<IGetAllTeamRequestAction>) {
  try {
    const httpClient = AxiosClient.get();

    const params: IGetTeamRequest = {
      key: action.payload.data.key,
    };

    const response: AxiosResponse<ITeam[]> = yield call(
      httpClient.get,
      'https://replay.sportsdata.io/api/v3/nba/stats/json/allteams',
      {
        params,
      },
    );

    if (!response.data.length) {
      yield put(
        teamActions.getAllSuccessWithoutData({
          message: 'Nenhum time encontrado',
        }),
      );
      return;
    }
    yield put(
      teamActions.getAllSuccessWithData({
        list: response.data,
      }),
    );
  } catch (error) {
    action.payload.functions.errors(error);
    yield put(teamActions.getAllFailure());
  }
}

export default getAll;
