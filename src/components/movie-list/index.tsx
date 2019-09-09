import React from 'react';
import './style.less'
import { Movie } from '../../models/movieDay';
import MovieCard from '../movie-card';


interface State {
}

interface Props {
    movieList: Array<Movie>;
    showMovies: boolean;
    selectedDate: Date;
    selectedCity: string;
}


class MovieList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    formatDate(date: Date): string {
        let options = { month: 'long', day: 'numeric' }
        let formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate;
    }

    render() {
        return (
            <div>
                    <div>
                        <div className="movie-list-title">
                            <h1>On {this.formatDate(this.props.selectedDate)} in {this.props.selectedCity} we show</h1>
                        </div>
                    </div>
                {
                    this.props.movieList.map((movie, index) => {
                        return <MovieCard key={index} info={movie} />
                    })
                }
            </div>
        );
    }
}

export default MovieList;