import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Genre, IGenreResponse, IMovie} from "../interfaces/movie.interface";
import {pageService} from "../services/page.service";
import {genreService} from "../services/genre.service";
import {IGenre, IGenreResult} from "../interfaces/genre.interface";

interface IMovieState {
    movies: IMovie[],
    currentMovie: IMovie | null,
    genres: Genre[],
    moviesWithGenres: IGenre[]
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

interface IGenrePagination {
    with_genres: number,
    page: number
}

const initialState: IMovieState = {
    movies: [],
    currentMovie: null,
    genres: [],
    moviesWithGenres: []
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

export const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {dispatch}) => {
        const {data} = await genreService.getAll();
        dispatch(setGenres({genres: data}))
    }
)

export const getAllMoviesByGenre = createAsyncThunk(
    'movieSlice/getAllMoviesByGenre',
    async ({with_genres, page}: IGenrePagination, {dispatch}) => {
        const {data} = await genreService.getPagesByGenre(with_genres, page);
        dispatch(setMoviesWithGenres({moviesWithGenres: data}))
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
        },
        setGenres: (state, action: PayloadAction<{ genres: IGenreResponse }>) => {
            state.genres = action.payload.genres.genres
        },
        setMoviesWithGenres: (state, action: PayloadAction<{ moviesWithGenres: IGenreResult }>) => {
            state.moviesWithGenres = action.payload.moviesWithGenres.results
        }
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;
export const {setMovies, takeMovie, setGenres, setMoviesWithGenres} = movieSlice.actions;