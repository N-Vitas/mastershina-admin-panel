import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Loading from '../Loading/Loading';

export class StatsCard extends Component{
    render(){
        return (
            <div className="card card-stats">
                <Loading show={this.props.loading} />
                <div className="content">
                    <Row>
                        <Col xs={5}>
                            <div className="icon-big text-center icon-warning">
                                {this.props.bigIcon}
                            </div>
                        </Col>
                        <Col xs={7}>
                            <div className="numbers">
                                <p>{this.props.statsText}</p>
                                {this.props.statsValue}
                            </div>
                        </Col>
                    </Row>
                    <div className="footer">
                        <hr />
                        <div className="stats">
                            {this.props.statsIcon}{" "}{this.props.statsIconText}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatsCard;
