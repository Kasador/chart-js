import React, { Component } from 'react';
import Nav from '../Components/Nav';
import { Router, Route } from 'react-router';
import Chart from '../Components/Chart';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Router>
                    <Route path="/" Component={Chart}></Route>
                </Router>
            </div>
        );
    }
}

export default App;