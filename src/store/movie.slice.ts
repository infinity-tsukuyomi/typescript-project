import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Genre, IMovie} from "../interfaces/movie.interface";
import {pageService} from "../services/page.service";
import {genreService} from "../services/genre.service";

interface IMovieState {
    movies: IMovie[],
    currentMovie: IMovie | null,
    genres: Genre[]
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
    currentMovie: null,
    genres: []
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

// export const getAllGenres = createAsyncThunk(
//     'movieSlice/getAllGenres',
//     async (_, {dispatch}) => {
//         const {name} = await genreService.getAll();
        // dispatch(setGenres({genres: name}))
//     }
// )

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<{ movies: IResponseMovie }>) => {
            state.movies = action.payload.movies.results
        },
        takeMovie: (state, action: PayloadAction<{ currentMovie: IMovie }>) => {
            state.currentMovie = action.payload.currentMovie
        },
        setGenres: (state, action: PayloadAction<{ genres: Genre[] }>) => {
            state.genres = action.payload.genres
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;
export const {setMovies, takeMovie, setGenres} = movieSlice.actions;