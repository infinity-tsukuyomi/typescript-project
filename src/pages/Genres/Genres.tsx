import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getAllGenres} from "../../store/movie.slice";
import SingleGenre from "../../components/Genre/SingleGenre";

const Genres: FC = () => {
    const {genres} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, []);

    const inputChange = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <div>
            <div>
                <input onChange={inputChange} type="search" name={'search'} placeholder={'Search here'}/>
                <button>Search</button>
            </div>
            {genres.map(genre => <SingleGenre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;