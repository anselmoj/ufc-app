import { Draft } from '@reduxjs/toolkit'

import { IWorkData } from '../..'

function createSuccess(draft: Draft<IWorkData>) {
  draft.create.config.isLoading = false
}

export default createSuccess
