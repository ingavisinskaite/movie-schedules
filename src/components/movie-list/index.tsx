import React from 'react';
import './style.less'
import { Movie } from '../../models/movieDay';
import MovieCard from '../movie-card';
import {formatDate} from '../../services/calendarService';

interface IProps {
    movieList: Array<Movie>;
    showMovies: boolean;
    selectedDate: Date;
    selectedCity: string;
}


const MovieList = (props: IProps) => {
        return (
            <div>
                    <div>
                        <div className="movie-list-title">
                            <h1>On {formatDate(props.selectedDate)} in {props.selectedCity} we show</h1>
                        </div>
                    </div>
                {
                    props.movieList.map((movie, index) => {
                        return <MovieCard key={index} info={movie} />
                    })
                }
            </div>
        );
}

export default MovieList;