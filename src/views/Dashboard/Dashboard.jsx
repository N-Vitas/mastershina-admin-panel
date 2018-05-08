import React, { Component } from 'react';
// import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';
import {StatsCard} from '../../components/StatsCard/StatsCard.jsx';

class Dashboard extends Component {
    
    componentWillMount(){
        const { token, updateMessage, fetchDashboard } = this.props;
        updateMessage("Данные загружаются это может занять время");
        fetchDashboard(token);
    }
    getColorText(col){
        if(col > 1000)
            return "text-danger";
        if(col >= 100)
            return "text-warning";
        if(col < 100 && col !== 0)
            return "text-info";
        return "text-success"
    }
    render() {
        const { newSiteImages, oldSiteImages, newSiteDescription, oldSiteDescription } = this.props;
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-image ${this.getColorText(oldSiteImages.shiny)}`}></i>}
                                statsIconText={<span className="text-success">Шины на старом сайте</span>}
                                statsValue={<span className={this.getColorText(oldSiteImages.shiny)}>{oldSiteImages.shiny}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(oldSiteImages.shiny)}>без картинок</span>}
                                loading={oldSiteImages.shiny === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-image ${this.getColorText(oldSiteImages.disk)}`}></i>}
                                statsIconText={<span className="text-success">Диски на старом сайте</span>}
                                statsValue={<span className={this.getColorText(oldSiteImages.disk)}>{oldSiteImages.disk}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(oldSiteImages.disk)}>без картинок</span>}
                                loading={oldSiteImages.disk === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-image ${this.getColorText(oldSiteImages.oil)}`}></i>}
                                statsIconText={<span className="text-success">Масла на старом сайте</span>}
                                statsValue={<span className={this.getColorText(oldSiteImages.oil)}>{oldSiteImages.oil}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(oldSiteImages.oil)}>без картинок</span>}
                                loading={oldSiteImages.oil === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-image ${this.getColorText(oldSiteImages.battery)}`}></i>}
                                statsIconText={<span className="text-success">Аккум-ры на старом сайте</span>}
                                statsValue={<span className={this.getColorText(oldSiteImages.battery)}>{oldSiteImages.battery}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(oldSiteImages.battery)}>без картинок</span>}
                                loading={oldSiteImages.battery === 0}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-image ${this.getColorText(newSiteImages.shiny)}`}></i>}
                                statsIconText={<span className="text-success">Шины на новом сайте</span>}
                                statsValue={<span className={this.getColorText(newSiteImages.shiny)}>{newSiteImages.shiny}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(newSiteImages.shiny)}>без картинок</span>}
                                loading={newSiteImages.shiny === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-image ${this.getColorText(newSiteImages.disk)}`}></i>}
                                statsIconText={<span className="text-success">Диски на новом сайте</span>}
                                statsValue={<span className={this.getColorText(newSiteImages.disk)}>{newSiteImages.disk}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(newSiteImages.disk)}>без картинок</span>}
                                loading={newSiteImages.disk === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-image ${this.getColorText(newSiteImages.oil)}`}></i>}
                                statsIconText={<span className="text-success">Масла на новом сайте</span>}
                                statsValue={<span className={this.getColorText(newSiteImages.oil)}>{newSiteImages.oil}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(newSiteImages.oil)}>без картинок</span>}
                                loading={newSiteImages.oil === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-image ${this.getColorText(newSiteImages.battery)}`}></i>}
                                statsIconText={<span className="text-success">Аккум-ры на новом сайте</span>}
                                statsValue={<span className={this.getColorText(newSiteImages.battery)}>{newSiteImages.battery}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(newSiteImages.battery)}>без картинок</span>}
                                loading={newSiteImages.battery === 0}
                            />
                        </Col>
                    </Row>



                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-dedent ${this.getColorText(oldSiteDescription.shiny)}`}></i>}
                                statsIconText={<span className="text-success">Шины на старом сайте</span>}
                                statsValue={<span className={this.getColorText(oldSiteDescription.shiny)}>{oldSiteDescription.shiny}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(oldSiteDescription.shiny)}>без описания</span>}
                                loading={oldSiteDescription.shiny === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-dedent ${this.getColorText(oldSiteDescription.disk)}`}></i>}
                                statsIconText={<span className="text-success">Диски на старом сайте</span>}
                                statsValue={<span className={this.getColorText(oldSiteDescription.disk)}>{oldSiteDescription.disk}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(oldSiteDescription.disk)}>без описания</span>}
                                loading={oldSiteDescription.disk === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-dedent ${this.getColorText(oldSiteDescription.oil)}`}></i>}
                                statsIconText={<span className="text-success">Масла на старом сайте</span>}
                                statsValue={<span className={this.getColorText(oldSiteDescription.oil)}>{oldSiteDescription.oil}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(oldSiteDescription.oil)}>без описания</span>}
                                loading={oldSiteDescription.oil === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-dedent ${this.getColorText(oldSiteDescription.battery)}`}></i>}
                                statsIconText={<span className="text-success">Аккум-ры на старом сайте</span>}
                                statsValue={<span className={this.getColorText(oldSiteDescription.battery)}>{oldSiteDescription.battery}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(oldSiteDescription.battery)}>без описания</span>}
                                loading={oldSiteDescription.battery === 0}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-dedent ${this.getColorText(newSiteDescription.shiny)}`}></i>}
                                statsIconText={<span className="text-success">Шины на новом сайте</span>}
                                statsValue={<span className={this.getColorText(newSiteDescription.shiny)}>{newSiteDescription.shiny}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(newSiteDescription.shiny)}>без описания</span>}
                                loading={newSiteDescription.shiny === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-dedent ${this.getColorText(newSiteDescription.disk)}`}></i>}
                                statsIconText={<span className="text-success">Диски на новом сайте</span>}
                                statsValue={<span className={this.getColorText(newSiteDescription.disk)}>{newSiteDescription.disk}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(newSiteDescription.disk)}>без описания</span>}
                                loading={newSiteDescription.disk === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-dedent ${this.getColorText(newSiteDescription.oil)}`}></i>}
                                statsIconText={<span className="text-success">Масла на новом сайте</span>}
                                statsValue={<span className={this.getColorText(newSiteDescription.oil)}>{newSiteDescription.oil}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(newSiteDescription.oil)}>без описания</span>}
                                loading={newSiteDescription.oil === 0}
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className={`fa fa-dedent ${this.getColorText(newSiteDescription.battery)}`}></i>}
                                statsIconText={<span className="text-success">Аккум-ры на новом сайте</span>}
                                statsValue={<span className={this.getColorText(newSiteDescription.battery)}>{newSiteDescription.battery}</span>}
                                statsIcon={<i className="fa fa-car text-success"></i>}
                                statsText={<span className={this.getColorText(newSiteDescription.battery)}>без описания</span>}
                                loading={newSiteDescription.battery === 0}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
