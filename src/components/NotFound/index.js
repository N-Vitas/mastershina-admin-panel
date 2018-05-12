import React, { Component } from 'react';
import Help from '../../Helpers';
import {
    Grid, Row, Col
} from 'react-bootstrap';
import { Card } from '../Card/Card.jsx';
import images from "../../assets/img/Error.gif";

class NotFindData extends Component{
    render(){
        return (
            <div className="content">
                <Card
                    title="Упс что то пошло не так."
                    content={
                        <Row>
                            <Col className="text-center" lg={12} sm={12}>                                
                                <img className="preview" src={images} />
                            </Col>
                        </Row>
                    }
                />
            </div>
        );
    }
}

export default NotFindData;