import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../Components/Nav';
import Chart from '../Components/Chart';
import Home from '../Components/Home';

function App() {
    return (
        <Router>
        <div className="App">
            <Nav />
            <div className="AppContainer">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/charts" component={Chart} />
                </Switch>
            </div>
        </div>
        </Router>
    );
}

export default App;