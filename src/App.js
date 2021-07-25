import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

const App = (props) => {
    const { articles } = props;
    const [sortBy, setSortBy] = useState('');

    const handleSortButtonClick = (state) => {
        setSortBy(state)
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label
                    className="form-hint mb-0 text-uppercase font-weight-light"
                >
                    Sort By
                </label>
                <button
                    data-testid="most-upvoted-link"
                    className="small"
                    onClick={() => {handleSortButtonClick('upvote')}}
                >
                    Most Upvoted
                </button>
                <button
                    data-testid="most-recent-link"
                    className="small"
                    onClick={() => {handleSortButtonClick('date')}}
                >
                    Most Recent
                </button>
            </div>
            <Articles articles={articles} sortBy={sortBy}/>
        </div>
    );

}

export default App;
