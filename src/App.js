import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {ChannelTable} from "./components/ChannelTable/ChannelTable";

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
          <ChannelTable/>
      </div>
    );
  }
}

export default App;
