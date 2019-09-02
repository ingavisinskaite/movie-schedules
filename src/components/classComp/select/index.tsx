import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 
interface State {
    cities: Array<string>;
    selectedCity: string;
    startDate: Date;
}

interface Props { }


class Select extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            cities: ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys'],
            selectedCity: 'Vilnius',
            startDate: new Date(),

        };

    }


    showCitiesToSelect() {
        let cityOptions = [];
        for (let i = 0; i < this.state.cities.length; i++) {
            cityOptions.push(<option key={i}>{this.state.cities[i]}</option>)
        }
        return cityOptions;
    }

    handleDateChange = (date: Date) => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <div>
                <select>
                    {this.showCitiesToSelect()}
                </select>

                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleDateChange}
                />
            </div>
        );
    }
}

export default Select;