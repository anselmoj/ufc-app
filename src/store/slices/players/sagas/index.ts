import {all, takeLatest} from 'redux-saga/effects';

import {playerActions} from '../index';
import getAll from './getAll';

const playerSagas = all([takeLatest(playerActions.getAllRequest, getAll)]);

export default playerSagas;
