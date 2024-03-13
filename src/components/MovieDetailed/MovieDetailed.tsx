import React, {FC} from 'react';
import {IMovie} from "../../interfaces/movie.interface";

const MovieDetailed: FC<{ movie: IMovie }> = ({movie}) => {
    const {title, poster_path, overview, genres} = movie

    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`}/>
            </div>
            <div>{title}</div>
            <div>{overview}</div>
            <div>{genres.toString()}</div>
        </div>
    );
};

export default MovieDetailed;