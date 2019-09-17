
import React from 'react';
import './style.less'


interface Props {
    title: string;
 }


class MoviePage extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.title)
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default MoviePage;