import React, { Component } from 'react';
import './token_stats.css';


class TokenStats extends Component {
    render() {
        return (
            <div className="thumbnail-div">
                <pre> <span className="thumbnail-font">Token Stats </span></pre>
                <hr className="thumbnail_line"></hr>
                <div  className="thumbnail-wrapper">
                    <div className="thumbnail-container green">
                        <p className="thumb-text">StartDate</p>
                    </div>
                    <div className="thumbnail-container red">
                        <p className="thumb-text">EndDate</p>
                    </div>
                    <div className="thumbnail-container purple">
                        <p className="thumb-text">Allocation</p>
                    </div>
                    <div className="thumbnail-container yellow">
                        <p className="thumb-text">Sold</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TokenStats;