import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movie.interface";
import css from "../../App.module.css"
import {Link} from "react-router-dom";

const Movie: FC<{ movie: IMovie }> = ({movie}) => {
    const {title, poster_path} = movie;

    return (
        <div>
            <div className={css.postersBackground}>
                <Link to={title}>
                    <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`}/>
                    <div className={css.title}>Name: {title}</div>
                </Link>
            </div>
        </div>
    );
};

export default Movie;