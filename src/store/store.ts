import {combineReducers, configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movie.slice";
import genreReducer from "./genre.slice";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

