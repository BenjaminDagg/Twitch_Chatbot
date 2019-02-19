import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";



export  class ChannelDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: null
        };

    }

    componentDidMount() {
        var name = this.props.match.params.name;
        if (name) {
            this.setState({name:name});
        }
    }


    render() {

        return (
            <div>
                {this.state.name &&
                    <h1>{this.state.name}</h1>
                }
            </div>
        );
    }
}


