import { Draft } from '@reduxjs/toolkit'
import { IWorkData } from '../..'

function detailsFailure(draft: Draft<IWorkData>) {
  draft.details.config.isLoading = false
}

export default detailsFailure
