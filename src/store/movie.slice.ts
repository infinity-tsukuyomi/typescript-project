import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../interfaces/movie.interface";
import {pageService} from "../services/page.service";

interface IMovieState {
    movies: IMovie[],
    currentMovie: IMovie[]
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
    currentMovie: []
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
        dispatch(setMovies({movies: data}))
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{ movies: IResponseMovie }>) => {
            state.movies = action.payload.movies.results
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;
export const {setMovies} = movieSlice.actions;