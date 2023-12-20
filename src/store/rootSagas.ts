import { all } from 'redux-saga/effects'

import fighterSagas from './slices/fighters/sagas'
import playerSagas from './slices/players/sagas'
import teamSagas from './slices/team/sagas'
import workSagas from './slices/work/sagas'

function* rootSagas() {
  yield all([teamSagas, playerSagas, fighterSagas, workSagas])
}

export default rootSagas
