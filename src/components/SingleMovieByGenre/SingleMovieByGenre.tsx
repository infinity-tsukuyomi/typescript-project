import React, {FC} from 'react';
import css from "../../App.module.css";
import {Link} from "react-router-dom";
import {IGenre} from "../../interfaces/genre.interface";

const SingleMovieByGenre: FC<{ moviesWithGenre: IGenre }> = ({moviesWithGenre}) => {
    const {title, poster_path, id} = moviesWithGenre;

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

export default SingleMovieByGenre;