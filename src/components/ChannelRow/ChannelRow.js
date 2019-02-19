import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ChannelRow.css";


export  class ChannelRow extends Component {



    render() {

        return (
            <div className="row justify-content-center">
                {this.props.children}
            </div>
        );
    }
}


