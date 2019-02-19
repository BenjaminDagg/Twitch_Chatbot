import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



export  class ChannelRow extends Component {



    render() {

        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}


