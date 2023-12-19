import {reducers, store} from '../index';

export type ReduxStore = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
