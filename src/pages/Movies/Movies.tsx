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
        setQuery(updatedSearchParams.toString());
    }

    return (
        <div>
            <div>
                <input onChange={inputChange} type="search" name={'search'} placeholder={'Search here'}/>
                <button>Search</button>
            </div>
            <button onClick={next}>Next</button>
            <button onClick={back}>Back</button>
            <div className={css.posters}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default Movies;