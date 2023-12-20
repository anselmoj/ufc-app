import { all, takeLatest } from 'redux-saga/effects'

import { workActions } from '../index'

import getAll from './getAll'
import create from './create'

const workSagas = all([
  takeLatest(workActions.getAllRequest, getAll),
  takeLatest(workActions.createRequest, create),
])

export default workSagas
