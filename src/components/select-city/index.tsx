import React from 'react';
import './style.less'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


interface State {

}

interface Props {
    cities: Array<string>;   
    selectCity: (selectedCity: string) => void;
 }


class SelectCity extends React.Component<Props, State> {

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
                </div>

            </div>
        );
    }
}

export default SelectCity;