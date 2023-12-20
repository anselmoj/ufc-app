import { fighterReducers, IFightersData } from './slices/fighters'
import { IPlayersData, playerReducers } from './slices/players'
import { ITeamsData, teamReducers } from './slices/team'
import { IWorkData, workReducers } from './slices/work'

export interface IApplicationState {
  team: ITeamsData
  player: IPlayersData
  fighter: IFightersData
  work: IWorkData
}

const rootReducers = {
  team: teamReducers,
  player: playerReducers,
  fighter: fighterReducers,
  work: workReducers,
}

export default rootReducers
