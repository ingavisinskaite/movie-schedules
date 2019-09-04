import React from 'react';
import './style.less'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMovies } from '../../services/movieService';
import { MovieDay, Movie, CinemaMovieSchedule } from '../../models/movieDay';
import { isSameDay } from '../../services/calendarService';
import MovieList from '../movie-list';


interface State {
    cities: Array<string>;
    selectedCity: string;
    selectedDate: Date;
    showMovies: boolean;
    movies: Array<Movie>;
}

interface Props { }


class Select extends React.Component<Props, State> {
    formattedDate: string;

    constructor(props: Props) {
        super(props);

        this.state = {
            cities: ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys'],
            selectedCity: 'Vilnius',
            selectedDate: new Date(),
            showMovies: false,
            movies: [],
        };

        this.searchForMovies = this.searchForMovies.bind(this);
    }

    componentDidMount() {
        this.formatDate(this.state.selectedDate)
    }

    showCitiesToSelect() {
        let cityOptions = [];
        for (let i = 0; i < this.state.cities.length; i++) {
            cityOptions.push(<option key={i}>{this.state.cities[i]}</option>)
        }
        return cityOptions;
    }

    handleDateChange = (date: Date): void => {
        this.setState({
            selectedDate: date,
            showMovies: false
        });
        this.formatDate(date);
    };

    selectCity(event: string): void {
        this.setState({
            selectedCity: event,
            showMovies: false,
        });
    }

    formatDate(date: Date): string {
        let options = { month: 'long', day: 'numeric' }
        this.formattedDate = date.toLocaleDateString('en-US', options);
        return this.formattedDate;
    }

    searchForMovies() {
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

    // async displayMovies() {
    //     let movieLi = []
    //     if (this.state.movies !== null) {
    //         for (let movie of this.state.movies) {
    //             movieLi.push(movie.title)
    //         }
    //         this.setState({movieList: movieLi})
    //     } else {
    //         console.log('Ups')
    //     }
    // }

    render() {
        return (
            <div>
                <div className="select">
                    <select className="cityToSelect" onChange={event => this.selectCity(event.target.value)}>
                        {this.showCitiesToSelect()}
                    </select>

                    <DatePicker className="dateToSelect"
                        selected={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        minDate={new Date()}
                        dateFormat="yyyy-MM-dd"
                    />

                    <button className="search-btn" onClick={this.searchForMovies}>Search</button>
                </div>
                {this.state.showMovies ?
                    <div>
                        <div className="movie-list-title">
                            <h1>On {this.formattedDate} in {this.state.selectedCity} we show</h1>
                        </div>
                        <div className="movie-list">
                            <MovieList movieList={this.state.movies}/>
                        </div>
                    </div>
                    : null}

            </div>
        );
    }
}

export default Select;