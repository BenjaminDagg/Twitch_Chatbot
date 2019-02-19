import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {ChannelTable} from "./components/ChannelTable/ChannelTable";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {ChannelDetails} from "./components/ChannelDetails/ChannelDetails";

const clientID = 'vcot0kpqo1jbrdodynosldxmimawiy';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="App">
          <Router>
            <div>
                <Route exact={true} path={"/"} component={ChannelTable} />
                <Route path="/channel/:id/:name" component={ChannelDetails}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
