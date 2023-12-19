import {all} from 'redux-saga/effects';

import fighterSagas from './slices/fighters/sagas';
import playerSagas from './slices/players/sagas';
import teamSagas from './slices/team/sagas';

function* rootSagas() {
  yield all([teamSagas, playerSagas, fighterSagas]);
}

export default rootSagas;
