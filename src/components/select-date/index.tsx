import React from 'react';
import './style.less'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
    selectedDate: Date;
    updateDate: (date: Date) => void;
}

export const SelectDate = (props: IProps) => {
    return (
        <div>
            <DatePicker className="dateToSelect"
                selected={props.selectedDate}
                onChange={props.updateDate}
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
            />
        </div>
    )
}