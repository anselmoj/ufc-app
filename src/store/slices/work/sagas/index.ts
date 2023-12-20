import { all, takeLatest } from 'redux-saga/effects'

import { workActions } from '../index'

import getAll from './getAll'
import create from './create'
import edit from './edit'
import details from './details'

const workSagas = all([
  takeLatest(workActions.getAllRequest, getAll),
  takeLatest(workActions.createRequest, create),
  takeLatest(workActions.editRequest, edit),
  takeLatest(workActions.detailsRequest, details),
])

export default workSagas
