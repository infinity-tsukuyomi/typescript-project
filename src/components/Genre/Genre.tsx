import React, {FC} from 'react';
import {Genre} from "../../interfaces/movie.interface";

const Genre: FC<{genre: Genre}> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
        </div>
    );
};

export default Genre;