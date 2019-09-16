import React from "react";
import { Route, Switch } from "react-router-dom";

import { App } from "./App";
import MoviePage from "./components/movie-page";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/movie" component={MoviePage}/>
    </Switch>
);

export { Routes };
