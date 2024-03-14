import React, {FC, useEffect, useState} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Movie from "../../components/Movie/Movie";
import {getAllMovies, searchMovie} from "../../store/movie.slice";
import css from "../../App.module.css"
import {useSearchParams} from "react-router-dom";

const Movies: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();
    const pageQuery = Number(query.get('pageNumber')) || 1;
    const searchQuery = query.get('name') || '';

    useEffect(() => {
        if (searchQuery === '') {
            dispatch(getAllMovies(pageQuery))
        } else {
            dispatch(searchMovie({query: searchQuery, page: pageQuery}))
        }
    }, [searchQuery, pageQuery]);

    const next = () => {
        setQuery({...query, pageNumber: (pageQuery + 1).toString()})
    }

    const back = () => {
        setQuery({...query, pageNumber: (pageQuery - 1).toString()})
    }

    const inputChange = (e: React.FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        setQuery({name: target.value})
        let updatedSearchParams = new URLSearchParams(query.toString());
        updatedSearchParams.set('name', `${target.value}`);
        updatedSearchParams.set('pageNumber', '1');
        setQuery(updatedSearchParams.toString());
    }

    return (
        <div>
            <div className={css.searchDiv}>
                <input onChange={inputChange} className={css.moviesInput} type="search" name={'search'} placeholder={'Search here'}/>
                <button className={css.searchButton}>Search</button>
            </div>
            <div className={css.posters}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.paginationButtons}>
                <button className={css.back} onClick={back}>Back</button>
                <button className={css.next} onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Movies;