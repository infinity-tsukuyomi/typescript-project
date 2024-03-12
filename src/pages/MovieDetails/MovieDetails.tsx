import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movie.interface";

const MovieDetails: FC<{ movie: IMovie }> = ({movie}) => {
    const {title, poster_path, overview, genres} = movie;

    return (
        <div>
            <div>Name: {title}</div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`}/>
            </div>
            <div>Description: {overview}</div>
            {/*<div>Genre: {genres}</div>*/}
        </div>
    );
};

export default MovieDetails;