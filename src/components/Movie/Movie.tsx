import React, {FC} from 'react';

import {IMovie} from "../../interfaces/movie.interface";
import css from "../../App.module.css"
import {Link} from "react-router-dom";

const Movie: FC<{ movie: IMovie }> = ({movie}) => {
    const {title, poster_path, id} = movie;

    return (
        <div>
            <div className={css.postersBackground}>
                <Link to={id.toString()}>
                    {poster_path ? (
                        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`}/>
                    )
                        : <img className={css.noImage} src={'https://nkz.a-si.ru/img/no-photo.jpg'}/>
                    }
                    <div className={css.title}>{title}</div>
                </Link>
            </div>
        </div>
    );
};

export default Movie;