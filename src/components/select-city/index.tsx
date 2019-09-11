import React from 'react';
import './style.less'


interface Props {
    cities: Array<string>;   
    selectCity: (selectedCity: string) => void;
 }


class SelectCity extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
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
                <div>
                    <select className="cityToSelect" onChange={(event: any) => this.props.selectCity(event.target.value)}>
                        {this.showCitiesToSelect()}
                    </select>
                </div>

            </div>
        );
    }
}

export default SelectCity;