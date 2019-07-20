import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from '../Components/Nav';
import Charts from '../Components/Charts';
import Home from '../Components/Home';

function App() {
    return (
        <Router>
        <div className="App">
            <Nav />
            <div className="AppContainerWrapper">
                <div className="AppContainer">
                    <Route path="/" exact component={Home} />
                    <Route path="/charts" component={Charts} />
                </div>
            </div>
        </div>
        </Router>
    );
}

export default App;