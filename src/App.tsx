import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { getConfig } from "./configs/config.settings";
import { ISettings } from "./configs/config.settings.d";

import "./App.less";
import SelectCity from "./components/select-city";
import { MovieDay, Movie } from "./models/movieDay";
import { getMovies } from "./services/movieService";
import Parent from "./components/comp-interaction-example/parent";
import MovieList from "./components/movie-list";
import { isSameDay } from './services/calendarService'
import { SelectDate } from "./components/select-date";
import { SearchBtn } from "./components/search-btn";


interface IState {
    settings?: ISettings;
    movieDays?: Array<MovieDay>;
    cities: Array<string>;
    selectedCity: string;
    selectedDate: Date;
    showMovies: boolean;
    movies: Array<Movie>;
}

class App extends React.Component<RouteComponentProps, IState> {
    readonly state: IState = {
        settings: {},
        movieDays: [],
        cities: ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys'],
        selectedCity: 'Vilnius',
        selectedDate: new Date(),
        showMovies: false,
        movies: [],
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

    handleDateChange = (date: Date): void => {
        this.setState({
            selectedDate: date,
            showMovies: false
        });
    };

    selectCity(event: string): void {
        this.setState({
            selectedCity: event,
            showMovies: false,
        });
    }

    searchForMovies = () => {
        this.setState({ showMovies: true });
        this.getMoviesByDay(this.state.selectedDate);
    }

    getMoviesByDay(day: Date) {
        getMovies(day).then(data => {
            data.forEach(movieDate => {
                movieDate.date = new Date(movieDate.date);
                if (isSameDay(movieDate.date, day)) {
                    this.setState({ movies: movieDate.movies })
                }
            })
            console.log(this.state.movies)
            return this.state.movies;
        });
    }

    render = () => {
        const { movieDays } = this.state;
        console.log(movieDays);
        return (
            <div>
                <div className="select">
                    <SelectCity cities={this.state.cities} selectCity={this.selectCity} />
                    <SelectDate selectedDate={this.state.selectedDate} updateDate={this.handleDateChange} />
                    <SearchBtn searchForMovies={this.searchForMovies} />
                </div>
                <div>
                    {
                        this.state.showMovies ?

                            <MovieList movieList={this.state.movies} showMovies={this.state.showMovies} selectedCity={this.state.selectedCity} selectedDate={this.state.selectedDate} />

                            : null
                    }
                </div>
                {/* <Parent /> */}
            </div>
        );
    }
}

export { App };
