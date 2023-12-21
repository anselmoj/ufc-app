import { type Draft, type PayloadAction } from '@reduxjs/toolkit';
import { IWorkData } from '../..';


export interface ISetSearchAction {
  data: {
    title: string | null;
    status: string | null;
  };
}

function setSearch(
  draft: Draft<IWorkData>,
  action: PayloadAction<ISetSearchAction>,
) {
  draft.filter.search.title = action.payload.data.title ?? undefined;
  draft.filter.search.status = action.payload.data.status ?? undefined;
}

export default setSearch;
