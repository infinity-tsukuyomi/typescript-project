import React, {FC} from 'react';
import {Genre} from "../../interfaces/movie.interface";

const SingleGenre: FC<{genre: Genre}> = ({genre}) => {
    const {name} = genre;
    return (
        <div>
            <div>{name}</div>
        </div>
    );
};

export default SingleGenre;