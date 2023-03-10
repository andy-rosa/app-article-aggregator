import { configureStore, } from '@reduxjs/toolkit';
import { StateSchema, } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: __IS_DEF__,
    preloadedState: initialState,
  });
}
