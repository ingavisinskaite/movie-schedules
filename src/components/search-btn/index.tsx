import React from 'react';
import './style.less';

interface IProps {
    searchForMovies: () => void;
}

export const SearchBtn = (props: IProps) => {
    return (
        <div>
            <button className="search-btn" onClick={props.searchForMovies}>Search</button>
        </div>
    )
}