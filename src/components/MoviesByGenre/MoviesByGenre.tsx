import React, {FC, useEffect} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAllMoviesByGenre} from "../../store/movie.slice";
import SingleMovieByGenre from "../SingleMovieByGenre/SingleMovieByGenre";
import css from "../../App.module.css";

const MoviesByGenre: FC = () => {
    const {moviesWithGenres} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const [query, setQuery] = useSearchParams();
    const pageQuery = Number(query.get('pageNumber')) || 1;

    useEffect(() => {
        dispatch(getAllMoviesByGenre({with_genres: Number(id), page: pageQuery}))
    }, [id, pageQuery]);

    const next = () => {
        setQuery({...query, pageNumber: (pageQuery + 1).toString()})
    }

    const back = () => {
        setQuery({...query, pageNumber: (pageQuery - 1).toString()})
    }

    return (
        <div>
            <div className={css.posters}>
                {moviesWithGenres.map(moviesWithGenre =>
                    <SingleMovieByGenre key={moviesWithGenre.id} moviesWithGenre={moviesWithGenre}/>)}
            </div>
            <div className={css.paginationButtons}>
                <button className={css.back} onClick={back}>Back</button>
                <button className={css.next} onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default MoviesByGenre;