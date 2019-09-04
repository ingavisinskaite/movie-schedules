import React from 'react';

interface IProps {
    updateLabel: (text: string) => void;
}

export const ChildInput = (props: IProps) => (
    <div>
        <span>ChildInput has input: </span>
        <input onChange={(e) => {props.updateLabel(e.currentTarget.value)}}/>
    </div>
)
