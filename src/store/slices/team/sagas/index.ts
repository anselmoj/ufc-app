import {all, takeLatest} from 'redux-saga/effects';

import {teamActions} from '../index';
import getAll from './getAll';

const teamSagas = all([takeLatest(teamActions.getAllRequest, getAll)]);

export default teamSagas;
