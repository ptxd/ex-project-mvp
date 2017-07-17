import React, { Component } from 'react';

class AboutPage extends Component {
    render() {
        return (
        <div className="about-page">
            <div className="about-header">
            </div>
            <div className="contents">
                <div className="about">
                    <h1>About</h1>
                    <h2>Tech Stack</h2>
                        <ul>
                            <li>PERN</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>Postgres SQL</li>
                            <li>D3</li>
                            <li>LESS</li>
                        </ul>
                    <h2>Supporting Libraries</h2>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Recharts</li>
                            <li>React-Bootstrap</li>
                            <li>JQuery</li>
                            <li>Auth0</li>
                        </ul>
                    <h2>Dependencies</h2>
                         <ul>
                            <li>axios</li>
                            <li>body-parser</li>
                            <li>cors</li>
                            <li>massive</li>
                            <li>morgan</li>
                            <li>nodemon</li>
                            <li>lodash</li>
                            <li>redux-persist</li>
                            <li>react-redux</li>
                            <li>redux-thunk</li>
                        </ul>
                </div>
            </div>
        </div>
        );
    }
}

export default AboutPage;