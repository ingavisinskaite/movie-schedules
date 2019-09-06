import React from 'react';
import './style.less'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMovies } from '../../services/movieService';
import MovieList from '../movie-list';


interface State {

}

interface Props {
    cities: Array<string>;   
    selectedDate: Date;
    updateDate: (date: Date) => void;
    selectCity: (selectedCity: string) => void;
    searchForMovies: () => void;
 }


class Select extends React.Component<Props, State> {
    formattedDate: string;

    constructor(props: Props) {
        super(props);

        this.state = {
        };
    }

    showCitiesToSelect() {
        let cityOptions = [];
        for (let i = 0; i < this.props.cities.length; i++) {
            cityOptions.push(<option key={i}>{this.props.cities[i]}</option>)
        }
        return cityOptions;
    }


    render() {
        return (
            <div>
                <div className="select">
                    <select className="cityToSelect" onChange={event => this.props.selectCity(event.target.value)}>
                        {this.showCitiesToSelect()}
                    </select>

                    <DatePicker className="dateToSelect"
                        selected={this.props.selectedDate}
                        onChange={this.props.updateDate}
                        minDate={new Date()}
                        dateFormat="yyyy-MM-dd"
                    />

                    <button className="search-btn" onClick={this.props.searchForMovies}>Search</button>
                </div>

            </div>
        );
    }
}

export default Select;