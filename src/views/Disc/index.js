import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Tables from '../../components/Tables';

class Disc extends Component {

    componentWillMount(){
        const { getImageList, token } = this.props;
        getImageList(token);
    }
    lineClick(prop,key){
        const { disc:{ list, newsite }, pushEdit } = this.props;

        // console.log("lineClick",list[key].getDisc(),newsite[key].code)
        const edit = {
            code:prop[0],
            title:prop[1],
            images:"none_pic.jpg",
            description:null,    
        }
        for(let i in list){
            if(list[i].getDisc().code === prop[0]){
                edit.description = list[i].getDisc().desc;
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
        const { disc } = this.props;
        let obj = {};
        let array = [];
        if( disc.newsite.length > 0){
            for(let i in disc.newsite){
                obj[disc.newsite[i].code] = disc.newsite[i].title;
                array.push([disc.newsite[i].code, disc.newsite[i].title]);
            }
        }
        if( disc.list.length > 0){
            for(let i in disc.list){
                if(obj[disc.list[i].getDisc().code]){
                    array.push([disc.list[i].getDisc().code, disc.list[i].getDisc().name_new ]);
                }
                
            }
        }
        obj = null;
        return array;
    }
    render() {
        const { disc } = this.props;
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Tables
                            loading={disc.list.length === 0 || disc.newsite.length === 0}
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

export default Disc;
