import React, {FC, useEffect} from 'react';

import {genreService} from "../../services/genre.service";
import {useAppSelector} from "../../hooks/redux";

const Genres: FC = () => {
    const {genres} = useAppSelector(state => state.genreReducer);

    useEffect(() => {
        genreService.getAll().then(value => console.log(value))
    }, [genres]);

    return (
        <div>
            Genres
        </div>
    );
};

export default Genres;