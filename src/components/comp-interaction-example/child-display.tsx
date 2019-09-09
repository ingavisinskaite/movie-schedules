import React from 'react';

interface IProps {
    displayHeader: string;
}

export const ChildDisplay = (props: IProps) => (
    <div>
        <h1>ChildDisplay received text: {props.displayHeader}</h1>
    </div>
)
