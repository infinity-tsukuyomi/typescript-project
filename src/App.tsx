import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Movies from "./pages/Movies/Movies";
import Genres from "./pages/Genres/Genres";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

const App: FC = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Navigate to={'movies'}/>}/>

                    <Route path={'movies'} element={<Movies/>}>
                        <Route path={'movies/:id'} element={<MovieDetails/>}/>
                    </Route>

                    <Route path={'genres'} element={<Genres/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export default App;