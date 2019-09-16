import React from 'react';
import './style.less'
import { Movie } from '../../models/movieDay';
import { formatTime } from '../../services/calendarService';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MoviePage from '../movie-page';


interface IProps {
    info: Movie;
}

const MovieCard = (props: IProps) => {

    return (
        <Router>
            <div className="movie-card">
                <h2>{props.info.title}</h2>
                <Link to="/movie">
                    <img className="movie-img" src={props.info.imgSrc}></img>
                </Link>
                {
                    props.info.cinemaSchedules.map((cinema, index) => {
                        return <div key={index}><p>{cinema.title}: {cinema.times.map(time => formatTime(time))}</p></div>
                    })
                }


                <Route exact path="/movie" component={MoviePage} />

            </div>
        </Router>

    );
}

export default MovieCard;