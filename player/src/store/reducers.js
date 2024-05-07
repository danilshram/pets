import { configureStore } from '@reduxjs/toolkit';
import { localStoredReducer } from '../helpers/helpers';

import authSlice from './auth';
import playerSlice from './playerReducer';
import api from './graphql';

//store
const reducers = {
    [authSlice.name]: localStoredReducer(authSlice.reducer, 'authToken'),
    [api.reducerPath] : api.reducer,
    [playerSlice.name] : localStoredReducer(playerSlice.reducer, "player")
}
const store = configureStore({reducer: reducers, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)})
    
store.subscribe(() => console.log(store.getState()))

export default store;