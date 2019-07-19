import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/charts" component={Charts} />
                    </Switch>
                </div>
            </div>
        </div>
        </Router>
    );
}

export default App;