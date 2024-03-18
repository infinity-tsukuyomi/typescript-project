import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {Genre} from "../../interfaces/movie.interface";

const SingleGenre: FC<{genre: Genre}> = ({genre}) => {
    const {id, name} = genre;
    return (
        <div>
            <Link to={id.toString()}>{name}</Link>
        </div>
    );
};

export default SingleGenre;