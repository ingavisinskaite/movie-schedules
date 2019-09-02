import React from 'react';
import './style.less'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


interface State {
    cities: Array<string>;
    selectedCity: string;
    selectedDate: Date;
    showMovies: boolean;
}

interface Props { }


class Select extends React.Component<Props, State> {
    formattedDate: string;

    constructor(props: Props) {
        super(props);

        this.state = {
            cities: ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys'],
            selectedCity: 'Vilnius',
            selectedDate: new Date(),
            showMovies: false,
        };

        this.searchForMovies = this.searchForMovies.bind(this);
    }

    componentDidMount() {
        this.formatDate(this.state.selectedDate)
    }

    showCitiesToSelect() {
        let cityOptions = [];
        for (let i = 0; i < this.state.cities.length; i++) {
            cityOptions.push(<option key={i}>{this.state.cities[i]}</option>)
        }
        return cityOptions;
    }

    handleDateChange = (date: Date): void => {
        this.setState({
            selectedDate: date,
            showMovies: false
        });
        this.formatDate(date);
    };

    selectCity(event: string): void {
        this.setState({ 
            selectedCity: event,
            showMovies: false, 
        });
    }

    formatDate(date: Date): string {
        let options = {month: 'long', day: 'numeric'}
        this.formattedDate = date.toLocaleDateString('en-US', options);
        return this.formattedDate;
    }

    searchForMovies() {
        this.setState({showMovies: true})
    }

    render() {
        return (
            <div>
                <div className="select">
                    <select className="cityToSelect" onChange={event => this.selectCity(event.target.value)}>
                        {this.showCitiesToSelect()}
                    </select>

                    <DatePicker className="dateToSelect"
                        selected={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        minDate={new Date()}
                    />

                    <button className="search-btn" onClick={this.searchForMovies}>Search</button>
                </div>
                {this.state.showMovies ? <div className="movie-list"> <h1>On {this.formattedDate} in {this.state.selectedCity} we show</h1></div> : null}
                
            </div>
        );
    }
}

export default Select;