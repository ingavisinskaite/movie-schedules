import React from "react";

interface IClassCompState {

}

interface IClassCompProps {
    testNumber: number;
}

class ClassComp extends React.Component<IClassCompProps, IClassCompState> {

    async componentDidMount() {
        console.log("Hello from ChooseCityComponent's componentDidMount method");
    }

    render = () => {
        return (
            <div>
                <h3>ChooseCity: I'm a smart (or class) component.</h3>
                <div>I have access to lifecycle methods, such as componentDidMount. The prop passed to me: {this.props.testNumber}</div>
            </div>
        );
    }
}

export { ClassComp };
