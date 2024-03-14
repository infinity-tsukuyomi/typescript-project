import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {movieById} from "../../store/movie.slice";
import {useParams} from "react-router-dom";
import css from "../../App.module.css";

const MovieDetails: FC = () => {
    const {currentMovie} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(movieById(Number(id)))
    }, []);

    return (
        <div className={css.movieDetail}>
            <div className={css.movieDetailTitle}>{currentMovie?.title}</div>
            <div className={css.movieDetailImage}>{currentMovie?.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w300/${currentMovie?.poster_path}`}/>
                )
                : <img className={css.noImage} src={'https://nkz.a-si.ru/img/no-photo.jpg'}/>
            }</div>
            <div className={css.movieDetailVotes}>{currentMovie?.vote_average}</div>
            <div className={css.movieDetailTagline}>{currentMovie?.tagline}</div>
            <div className={css.movieDetailOverview}>Overview: {currentMovie?.overview}</div>
            <div className={css.movieDetailGenres}>Genres: {currentMovie?.genres.toString()}</div>
            <div className={css.movieDetailDate}>Data Release: {currentMovie?.release_date}</div>
        </div>
    );
};

export default MovieDetails;