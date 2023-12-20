import { Draft } from '@reduxjs/toolkit'

import { IWorkData } from '../..'

function createFailure(draft: Draft<IWorkData>) {
  draft.create.config.isLoading = false
}

export default createFailure
