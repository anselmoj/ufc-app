import { Draft } from '@reduxjs/toolkit'
import { IWorkData } from '../..'

function editSuccess(draft: Draft<IWorkData>) {
  draft.edit.config.isLoading = false
}

export default editSuccess
