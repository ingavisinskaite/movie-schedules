import React from 'react';
import { ChildInput } from './child-input';
import { ChildDisplay } from './child-display';

interface IState {
    currentText: string;
}

class Parent extends React.Component<{}, IState> {

    readonly state: IState = {
        currentText: ''
    };
    
    updateLabel = (text: string): void => {
        this.setState({
            currentText: text
        });
    }

    render() {
        return <div>
            <ChildInput updateLabel={this.updateLabel}/>
            <ChildDisplay displayHeader={this.state.currentText}/>
        </div>
    }
}

export default Parent;