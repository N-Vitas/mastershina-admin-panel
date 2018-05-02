import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Tables from '../../components/Tables';

class Oil extends Component {

    componentWillMount(){
        const { getImageList, token } = this.props;
        getImageList(token);
    }
    lineClick(prop,key){
        const { oil:{ list, newsite }, pushEdit } = this.props;

        // console.log("lineClick",list[key].getOil(),newsite[key].code)
        const edit = {
            code:prop[0],
            title:prop[1],
            images:"none_pic.jpg",
            description:null,    
        }
        for(let i in list){
            if(list[i].getOil().code === prop[0]){
                edit.description = list[i].getOil().desc;
                break
            }
        }
        if(edit.description === null){
            edit.description = "</br>";
            for(let i in list){
                if(newsite[i].code === prop[0]){
                    edit.description = newsite[i].description;
                    break
                }
            }
        }

        if(edit.description !== null && typeof edit.description === 'string' && edit.description.length === 0){
            edit.description = "</br>";
        }
        pushEdit(edit);
        window.location.hash = "#/image-edit";
        
    }
    itemClick(prop,key){
        console.log("itemClick",prop,key)
    }
    prediction(){
        const { oil } = this.props;
        let obj = {};
        let array = [];
        if( oil.newsite.length > 0){
            for(let i in oil.newsite){
                obj[oil.newsite[i].code] = oil.newsite[i].title;
                array.push([oil.newsite[i].code, oil.newsite[i].title]);
            }
        }
        if( oil.list.length > 0){
            for(let i in oil.list){
                if(obj[oil.list[i].getOil().code]){
                    array.push([oil.list[i].getOil().code, oil.list[i].getOil().name_new ]);
                }
                
            }
        }
        obj = null;
        return array;
    }
    render() {
        const { oil } = this.props;
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Tables
                            loading={oil.list.length === 0 || oil.newsite.length === 0}
                            thArray={["Код СРМ", "Наименование"]}
                            tdArray={this.prediction()}
                            update={this.prediction.bind(this)}
                            lineClick={this.lineClick.bind(this)}
                            itemClick={this.itemClick}
                            title="Список масел у которых нет изображений"
                        />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Oil;
