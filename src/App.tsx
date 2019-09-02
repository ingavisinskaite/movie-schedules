import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { getConfig } from "./configs/config.settings";
import { ISettings } from "./configs/config.settings.d";
import { ClassComp } from "./components/classComp/classComp";

import "./App.less";
import { FuncComp } from "./components/functionalComp/functionalComp";
import Select from "./components/classComp/select";

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
                <Select />
            </div>
        );
    }
}

export { App };
