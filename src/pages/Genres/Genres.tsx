import React, {FC, useEffect} from 'react';

// import {useAppDispatch, useAppSelector} from "../../hooks/redux";
// import {getAllGenres} from "../../store/movie.slice";
// import Genre from "../../components/Genre/Genre";

const Genres: FC = () => {
    // const {genres} = useAppSelector(state => state.movieReducer);
    // const dispatch = useAppDispatch();
    //
    // useEffect(() => {
    //     dispatch(getAllGenres())
    // }, [genres]);
    //
    // const inputChange = (e: React.FormEvent) => {
    //     e.preventDefault();
    // }

    return (
        <div>
            {/*<div>*/}
            {/*    <input onChange={inputChange} type="search" name={'search'} placeholder={'Search here'}/>*/}
            {/*    <button>Search</button>*/}
            {/*</div>*/}
            {/*{genres.map(genre => <Genre key={genre.id} genre={genre}/>)}*/}
        </div>
    );
};

export default Genres;