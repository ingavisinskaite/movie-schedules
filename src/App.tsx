import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { getConfig } from "./configs/config.settings";
import { ISettings } from "./configs/config.settings.d";
import { ClassComp } from "./components/classComp/classComp";

import "./App.less";
import { FuncComp } from "./components/functionalComp/functionalComp";

interface IState {
    settings?: ISettings;
}

class App extends React.Component<RouteComponentProps, IState> {
    readonly state: IState = {
        settings: {}
    };

    async componentWillMount() {
        this.setState({ settings: (await getConfig()) });
    }

    render = () => {
        const { settings } = this.state;
        return (
            <div>
                <p>{settings.TestValue}</p>
                <br/>
                <ClassComp testNumber={42}/>
                <br/>
                <FuncComp testString={"Hey there"}/>
            </div>
        );
    }
}

export { App };
