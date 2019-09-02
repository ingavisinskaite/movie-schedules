import React from "react";

interface IFuncCompProps {
    testString: string;
}

export const FuncComp = (props: IFuncCompProps) => (
    <div>
        <h4>FuncComp: I'm a functional (or arrow, or dumb) component.</h4>
        <p>I cannot have state. I should be small and used for representation (UI) mostly. Prop passed to me: {props.testString}</p>
    </div>
)
