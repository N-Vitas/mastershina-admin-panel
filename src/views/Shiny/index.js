import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Tables from '../../components/Tables';

class Shiny extends Component {

    componentWillMount(){
        const { getImageList, token } = this.props;
        getImageList(token);
    }
    lineClick(prop,key){
        const { shiny:{ list, newsite }, pushEdit } = this.props;

        // console.log("lineClick",list[key].getShiny(),newsite[key].code)
        const edit = {
            code:prop[0],
            title:prop[1],
            images:"none_pic.jpg",
            description:null,    
        }
        for(let i in list){
            if(list[i].getShiny().code === prop[0]){
                edit.description = list[i].getShiny().desc;
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
        const { shiny } = this.props;
        let obj = {};
        let array = [];
        if( shiny.newsite.length > 0){
            for(let i in shiny.newsite){
                obj[shiny.newsite[i].code] = shiny.newsite[i].title;
                array.push([shiny.newsite[i].code, shiny.newsite[i].title]);
            }
        }
        if( shiny.list.length > 0){
            for(let i in shiny.list){
                if(obj[shiny.list[i].getShiny().code]){
                    array.push([shiny.list[i].getShiny().code, shiny.list[i].getShiny().name_new ]);
                }
                
            }
        }
        obj = null;
        return array;
    }
    render() {
        const { shiny } = this.props;
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Tables
                            loading={shiny.list.length === 0 || shiny.newsite.length === 0}
                            thArray={["Код СРМ", "Наименование"]}
                            tdArray={this.prediction()}
                            update={this.prediction.bind(this)}
                            lineClick={this.lineClick.bind(this)}
                            itemClick={this.itemClick}
                            title="Список шин у которых нет изображений"
                        />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Shiny;
