import React from 'react';
import './style.less'


interface State {
}

interface Props { }


class MovieList extends React.Component<Props, State> {
    formattedDate: string;

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default MovieList;