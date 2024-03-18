import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAllGenres} from "../../store/movie.slice";
import SingleGenre from "../../components/SingleGenre/SingleGenre";
import css from "../../App.module.css"

const Genres: FC = () => {
    const {genres} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, []);

    return (
        <div className={css.genres}>
            {genres.map(genre => (
                <div className={css.genresList}>
                    <SingleGenre key={genre.id} genre={genre}/>
                </div>
            ))}
        </div>
    );
};

export default Genres;