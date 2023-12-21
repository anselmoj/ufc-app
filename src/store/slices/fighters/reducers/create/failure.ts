import { Draft } from '@reduxjs/toolkit'

import { IFightersData } from '../..'

function createFailure(draft: Draft<IFightersData>) {
  draft.create.config.isLoading = false
}

export default createFailure
