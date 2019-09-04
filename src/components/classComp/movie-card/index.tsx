import React from 'react';
import './style.less'
import {Movie} from '../../../models/movieDay';


interface State {
}

interface Props {
    info: Movie;
 }


class MovieCard extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    formatTime(time: Date) {
        let date = new Date(time);
        let movieTime = '';
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if(hours < 10 && minutes < 10) {
            movieTime = `0${hours}:0${minutes} `;
        } else if (hours < 10) {
            movieTime = `0${hours}:${minutes} `;
        } else if (minutes < 10) {
            movieTime = `${hours}:0${minutes} `;
        } else {
            movieTime = `${hours}:${minutes} `; 
        }
        
        return movieTime;
    }

    render() {
        return (
            <div className="movie-card">
               <h2>{this.props.info.title}</h2>
               <img className="movie-img" src={this.props.info.imgSrc}></img>
               {
                   this.props.info.cinemaSchedules.map((cinema, index) => {
                       return <div key={index}><p>{cinema.title}: {cinema.times.map(time => this.formatTime(time))}</p></div>
                   })
               }
            </div>
        );
    }
}

export default MovieCard;