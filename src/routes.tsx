import React from "react";
import { Route, Switch } from "react-router-dom";

import { App } from "./App";
import MoviePage from "./components/movie-page";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/movies/:title" component={(props: any) => <MoviePage title={props.match.params.title}/>}/>
    </Switch>
);

export { Routes };
