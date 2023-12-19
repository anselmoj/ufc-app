import IFighter from 'src/models/Fighter';

import {ReduxStore} from '../../../types';

function details(state: ReduxStore): IFighter | null {
  return state.fighter.details.data;
}
export default details;
