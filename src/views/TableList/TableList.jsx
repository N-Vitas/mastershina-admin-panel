import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from '../../components/Card/Card.jsx';
import Tables from '../../components/Tables';
import {thArray, tdArray, thArrayRu, tdArrayRu} from '../../variables/Variables.jsx';

class TableList extends Component {
    lineClick(prop,key){
        console.log("lineClick",prop,key)
    }
    itemClick(prop,key){
        console.log("itemClick",prop,key)
    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Tables 
                            thArray={thArrayRu}
                            tdArray={tdArrayRu}
                            lineClick={this.lineClick}
                            itemClick={this.itemClick}
                            title="Striped Table with Hover"
                            category="Here is a subtitle for this table"
                        />


                        <Col md={12}>
                            <Card
                                plain
                                title="Striped Table with Hover"
                                category="Here is a subtitle for this table"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                {
                                                    thArray.map((prop, key) => {
                                                        return (
                                                        <th  key={key}>{prop}</th>
                                                        );
                                                    })
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tdArray.map((prop,key) => {
                                                    return (
                                                        <tr key={key}>{
                                                            prop.map((prop,key)=> {
                                                                return (
                                                                    <td  key={key}>{prop}</td>
                                                                );
                                                            })
                                                        }</tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}

export default TableList;
