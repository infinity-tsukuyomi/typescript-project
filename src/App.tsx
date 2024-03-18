import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Movies from "./pages/Movies/Movies";
import Genres from "./pages/Genres/Genres";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MoviesByGenre from "./components/MoviesByGenre/MoviesByGenre";

const App: FC = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Navigate to={'movies'}/>}/>

                    <Route path={'movies'} element={<Movies/>}/>

                    <Route path={'movies/:id'} element={<MovieDetails/>}/>

                    <Route path={'genres'} element={<Genres/>}/>

                    <Route path={'genres/:id'} element={<MoviesByGenre/>}/>

                    <Route path={'genres/:id/:id'} element={<MovieDetails/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export default App;