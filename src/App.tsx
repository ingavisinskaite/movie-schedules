import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { getConfig } from "./configs/config.settings";
import { ISettings } from "./configs/config.settings.d";

import "./App.less";
import Select from "./components/select";
import { MovieDay } from "./models/movieDay";
import { getMovies } from "./services/movieService";
import Parent from "./components/comp-interaction-example/parent";

interface IState {
    settings?: ISettings;
    movieDays?: Array<MovieDay>;
}

class App extends React.Component<RouteComponentProps, IState> {
    readonly state: IState = {
        settings: {},
        movieDays: []
    };

    async componentWillMount() {
        const movieDays = await getMovies(new Date());
        movieDays.forEach(md => {
            md.date = new Date(md.date);
            md.movies.forEach(m => {
                m.cinemaSchedules.forEach(cs => {
                    cs.times = cs.times.map(t => new Date(t));
                })
            })
        })
        this.setState({ 
            settings: (await getConfig()),
            movieDays: movieDays
        });
    }

    render = () => {
        const { movieDays } = this.state;
        console.log(movieDays);
        return (
            <div>
                {/* <Select /> */}
                <Parent />
            </div>
        );
    }
}

export { App };
