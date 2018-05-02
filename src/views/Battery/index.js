import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Tables from '../../components/Tables';

class Battery extends Component {

    componentWillMount(){
        const { getImageList, token } = this.props;
        getImageList(token);
    }
    lineClick(prop,key){
        const { battery:{ list, newsite }, pushEdit } = this.props;

        // console.log("lineClick",list[key].getBattery(),newsite[key].code)
        const edit = {
            code:prop[0],
            title:prop[1],
            images:"none_pic.jpg",
            description:null,    
        }
        for(let i in list){
            if(list[i].getBattery().code === prop[0]){
                edit.description = list[i].getBattery().desc;
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
        const { battery } = this.props;
        let obj = {};
        let array = [];
        if( battery.newsite.length > 0){
            for(let i in battery.newsite){
                obj[battery.newsite[i].code] = battery.newsite[i].title;
                array.push([battery.newsite[i].code, battery.newsite[i].title]);
            }
        }
        if( battery.list.length > 0){
            for(let i in battery.list){
                if(obj[battery.list[i].getBattery().code]){
                    array.push([battery.list[i].getBattery().code, battery.list[i].getBattery().name_new ]);
                }
                
            }
        }
        obj = null;
        return array;
    }
    render() {
        const { battery } = this.props;
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Tables
                            loading={battery.list.length === 0 || battery.newsite.length === 0}
                            thArray={["Код СРМ", "Наименование"]}
                            tdArray={this.prediction()}
                            update={this.prediction.bind(this)}
                            lineClick={this.lineClick.bind(this)}
                            itemClick={this.itemClick}
                            title="Список дисков у которых нет изображений"
                        />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Battery;
