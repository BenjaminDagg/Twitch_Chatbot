import React, { Component } from 'react';
import "./ChannelTile.css";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";



export  class ChannelTile extends Component {

    constructor(props) {
        super(props);


    }

    componentDidMount() {

    }

    render() {

        return (
            <div className="channel-tile">
                <Link to={"/channel/" + this.props.channel.display_name}>
                    <div className="channel-tile-header">
                        <img src={this.props.channel.logo} />
                        <span>{this.props.channel.display_name}</span>
                    </div>
                    <div className="channel-tile-info">
                        {
                            this.props.channel.status != "" && this.props.channel.game &&
                            <span className="channel-status-live">LIVE</span>

                        }

                        {
                            this.props.channel.status != "" && this.props.channel.game &&
                            <span> playing {this.props.channel.game}</span>

                        }
                    </div>
                </Link>
            </div>
        );
    }
}


