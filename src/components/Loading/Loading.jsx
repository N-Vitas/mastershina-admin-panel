import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import icon from './icon.svg';

class Loading extends Component{
    render(){
        return this.props.show ? (
            <div className="loading">
                <Image className="center-loading" src={icon} />
            </div>
        ) : null;
    }
}

export default Loading;
