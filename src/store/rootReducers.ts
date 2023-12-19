import {fighterReducers, IFightersData} from './slices/fighters';
import {IPlayersData, playerReducers} from './slices/players';
import {ITeamsData, teamReducers} from './slices/team';

export interface IApplicationState {
  team: ITeamsData;
  player: IPlayersData;
  fighter: IFightersData;
}

const rootReducers = {
  team: teamReducers,
  player: playerReducers,
  fighter: fighterReducers,
};

export default rootReducers;
