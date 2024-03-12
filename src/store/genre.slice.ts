import {Genre} from "../interfaces/movie.interface";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {genreService} from "../services/genre.service";

interface IGenreState {
    genres: Genre[]
}

// export interface IResponseGenre {
//
// }

const initialState: IGenreState = {
    genres: []
}

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {dispatch}) => {
        const {genres} = await genreService.getAll();
        dispatch(setGenres({genres}))
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenres: (state, action: PayloadAction<{ genres: Genre[] }>) => {
            state.genres = action.payload.genres
        }
    }
});

const genreReducer = genreSlice.reducer;

export default genreReducer;
export const {setGenres} = genreSlice.actions;