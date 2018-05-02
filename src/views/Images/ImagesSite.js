import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import {Card} from '../../components/Card/Card.jsx';
import Tables from '../../components/Tables';
import config from '../../config';

class ImagesSite extends Component {
    
    componentDidMount(){
        const { images, getImageList } = this.props;
        if(images.length === 0)
            getImageList();
    }

    lineClick(prop,key){
        const { selected, selectedImage } = this.props;
        console.log("lineClick",prop[1],key)
        selectedImage(prop[1]);
    }
    prediction(){
        const { images } = this.props;
        let array = [];
        if( images.length > 0){
            for(let i in images){
                array.push([<img key={`images${i}`} className="table-preview" src={`${config.HOST_URL}upload/images/${images[i]}`} />, images[i]]);
            }
        }
        return array;
    }
    render() {
        const { images } = this.props;
        return (
            <div className="content">
                <Grid fluid>                    
                    <Tables
                        loading={images.length === 0}
                        limit={5}
                        thArray={["Картинка", "Наименование"]}
                        tdArray={this.prediction()}
                        update={this.prediction.bind(this)}
                        lineClick={this.lineClick.bind(this)}
                        title="Выбор изображений"
                    />
                </Grid>
            </div>
        );
    }
}

export default ImagesSite;
