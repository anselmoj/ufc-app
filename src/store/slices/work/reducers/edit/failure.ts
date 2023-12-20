import { Draft } from '@reduxjs/toolkit'
import { IWorkData } from '../..'

function editFailure(draft: Draft<IWorkData>) {
  draft.edit.config.isLoading = false
}

export default editFailure
