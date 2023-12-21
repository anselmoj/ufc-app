import { Draft } from '@reduxjs/toolkit'

import { IFightersData } from '../..'

function editSuccess(draft: Draft<IFightersData>) {
  draft.edit.config.isLoading = false
}

export default editSuccess
