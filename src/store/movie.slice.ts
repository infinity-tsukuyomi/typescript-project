import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../interfaces/movie.interface";
import {pageService} from "../services/page.service";

interface IMovieState {
    movies: IMovie[],
    currentMovie: IMovie | null
}

export interface IResponseMovie {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}

interface ISearch {
    query: string,
    page: number
}

const initialState: IMovieState = {
    movies: [],
    currentMovie: null
}

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (page: number, {dispatch}) => {
        const {data} = await pageService.getAll(page);
        dispatch(setMovies({movies: data}))
    }
)

export const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async ({query, page}: ISearch, {dispatch}) => {
        const {data} = await pageService.searchMovie(query, page);
        dispatch(setMovies({movies: data}))
    }
)

export const movieById = createAsyncThunk(
    'movieSlice/movieById',
    async (id: number, {dispatch}) => {
        const {data} = await pageService.getMovieById(id);
        dispatch(takeMovie({currentMovie: data}))
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{ movies: IResponseMovie }>) => {
            state.movies = action.payload.movies.results
        },
        takeMovie: (state, action: PayloadAction<{ currentMovie: IMovie }>) => {
            state.currentMovie = action.payload.currentMovie
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;
export const {setMovies, takeMovie} = movieSlice.actions;