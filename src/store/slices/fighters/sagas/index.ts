import {all, takeLatest} from 'redux-saga/effects';

import {fighterActions} from '../index';
import create from './create';
import details from './details';
import edit from './edit';
import getAll from './getAll';

const fighterSagas = all([
  takeLatest(fighterActions.getAllRequest, getAll),
  takeLatest(fighterActions.createRequest, create),
  takeLatest(fighterActions.editRequest, edit),
  takeLatest(fighterActions.detailsRequest, details),
]);

export default fighterSagas;
