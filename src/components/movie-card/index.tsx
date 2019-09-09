import React from 'react';
import './style.less'
import {Movie} from '../../models/movieDay';


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

    formatTime(time: Date): string {
        let date = new Date(time);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let hoursStr = hours > 10 ? `${hours}` : `0${hours}`;
        let minutesStr = minutes > 10 ? `${minutes}` : `0${minutes}`;
        const movieTime = `${hoursStr}:${minutesStr} `;
        return movieTime;
    }

    render() {
        return (
            <div>
               <h1>{this.props.info.title}</h1>
               <img src={this.props.info.imgSrc}></img>
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