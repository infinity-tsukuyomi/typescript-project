import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {movieById} from "../../store/movie.slice";
import MovieDetailed from "../../components/MovieDetailed/MovieDetailed";
import {useParams} from "react-router-dom";

const MovieDetails: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        // @ts-ignore
        dispatch(movieById())
    }, []);

    return (
        <div>
            {movies.map(movie => <MovieDetailed key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MovieDetails;