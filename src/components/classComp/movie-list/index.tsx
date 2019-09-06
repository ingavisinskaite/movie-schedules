import React from 'react';
import './style.less'
import { Movie } from '../../../models/movieDay';
import MovieCard from '../movie-card';


interface State {
}

interface Props {
    movieList: Array<Movie>
 }


class MovieList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="movie-list">
                {
                    this.props.movieList.map((movie, index) => {
                        return <MovieCard key={index} info={movie}/>
                    })
                }
            </div>
        );
    }
}

export default MovieList;