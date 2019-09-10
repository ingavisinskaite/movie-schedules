import React from 'react';
import './style.less'
import { Movie } from '../../models/movieDay';
import { formatTime } from '../../services/calendarService';

interface IProps {
    info: Movie;
}

const MovieCard = (props: IProps) => {
    return (
        <div className="movie-card">
            <h2>{props.info.title}</h2>
            <a href="https://www.imdb.com/">
                <img className="movie-img" src={props.info.imgSrc}></img>
            </a>
            {
                props.info.cinemaSchedules.map((cinema, index) => {
                    return <div key={index}><p>{cinema.title}: {cinema.times.map(time => formatTime(time))}</p></div>
                })
            }

        </div>
    );
}

export default MovieCard;