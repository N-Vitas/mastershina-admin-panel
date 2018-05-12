import React, { Component } from 'react';
import {
    Grid, Row, Col, Modal, Button, FormControl
} from 'react-bootstrap';
import { Card } from '../../components/Card/Card.jsx';
import ImagesSite from '../../containers/Images/ImagesSite';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import config from '../../config';
import Help from '../../Helpers';
import NotFindData from '../../components/NotFound';

class ShinyEdit extends Component {
    constructor(props) {
        super(props);
        const { shiny: { model } } = this.props;
        let state = {},modelState = {};
        try{
            modelState = {
                brand: model.getShiny().brand,
                name_new: model.getShiny().name_new,
                load: model.getShiny().load,
                speed: model.getShiny().speed,
                time: model.getShiny().time,
                ts: model.getShiny().ts,
                width: model.getShiny().width,
                rf: model.getShiny().rf,
                thorn: model.getShiny().thorn,
                price: model.getShiny().price,
                price1: model.getShiny().price1,
                kol: model.getShiny().kol,
            }
        }catch(e){
            modelState = {brand: "",name_new: "",load: "",speed: "",time: "",ts: "",width: "",rf: "",thorn: "",price: "",price1: "",kol: ""}
        }
        try{
            console.log(model.getShiny())
            const blocksFromHTML = convertFromHTML(model.getShiny().desc);
            state = EditorState.createWithContent(ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap,
            ));
        }catch(e){
            state = EditorState.createEmpty();
        }
        this.state = {
            editorState: state,
            dialog:false,
            ...modelState,
        }
    }

  _handleSubmit(e) {
    const { file, uploadFile,setError } = this.props;
    e.preventDefault();
    if (file.name){
        uploadFile(file);
    }else{
        setError("Не выбран файл")
    }
  }

  _handleImageChange(e) {
    e.preventDefault();
    const { selectedFileImage } = this.props
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      selectedFileImage(file,reader.result);
    }

    reader.readAsDataURL(file)
  }
  
  onEditorStateChange(editorState) {
    this.setState({editorState});
  };
  close(){
      this.setState({ dialog: false});
  }

  open(){
      this.setState({ dialog: true});
  }
  uploadFile(){
    const {file, uploadFile } = this.props;
    uploadFile(file);
  }
  save(){
    const {imagePreviewUrl, selected, itemEdit, uploadFile, updateProduct, upload, token, file } = this.props;
    if(!selected && !imagePreviewUrl){
        this.props.setError("Необходимо выбрать изображение");
        return
    }
    if(!upload){
        this.props.setError("Загрузите изображение на сервер");
        return
    }
    if(!itemEdit.code){
        this.props.setError("Не выбран товар");
        return
    }
    if(selected && !imagePreviewUrl){
        itemEdit.images = selected
    }
    if(!selected && file){
        itemEdit.images = file.name
    }
    itemEdit.description = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()));
    updateProduct(token,itemEdit);
  }
  renderImage(){
    const {imagePreviewUrl, selected, itemEdit, uploadFile, shiny: { model } } = this.props;
    let images = "https://mastershina.kz/upload/images/none_pic.jpg";
    if(selected){
        images = `https://mastershina.kz/upload/images/${selected}`;
    }else if (Help.isEmpty(model.getShiny().photo)) {
        images = "https://mastershina.kz/upload/images/none_pic.jpg";
    } else {
        images = `https://mastershina.kz/upload/images/${model.getShiny().photo}`;
    }
    if(Help.isEmpty(imagePreviewUrl) === false){
        images = imagePreviewUrl;
    }
    return (
        <Row>
            <Col className="previews" lg={4} sm={4}>
                <Button type="button" block bsStyle="info">
                    <i className="pe-7s-plus"></i> Выбрать изображение
                    <input className="preview-file" 
                        type="file" 
                        onChange={(e)=>this._handleImageChange(e)} /> 
                </Button>
                <Button type="button" block onClick={()=>this.open()} bsStyle="primary"> <i className="pe-7s-download"></i> Выбрать изображение c сайта</Button>
                <Button type="button" block bsStyle="success"> <i className="pe-7s-upload"></i> Загрузить на сайт</Button>
            </Col>
            <Col className="text-center" lg={8} sm={8}>
                <img className="preview-img" src={images} />
            </Col>
        </Row>
    );
  }
  render() {
    const { shiny: { model } } = this.props;
    const {brand,name_new,load,speed,time,ts,width,rf,thorn,price,price1,kol} = this.state;
    if(Help.isEmpty(model)){ 
        return <NotFindData />
    }
    return (
      <div className="content">
          
        <Modal bsSize="large" show={this.state.dialog} onHide={()=>this.close()}>
            <Modal.Body><ImagesSite/></Modal.Body>
            <Modal.Footer>
            <Button bsStyle="primary" onClick={()=>this.close()}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
          <Grid fluid>
            <Row>
                <Col>
                    <Card
                    title={model.getShiny().name_new}
                    content={
                        <Row>
                            <Col lg={3} sm={3}>Бренд шины</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={brand}></FormControl></Col>

                            <Col lg={3} sm={3}>Название шины</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={name_new}></FormControl></Col>

                            <Col lg={3} sm={3}>Индекс нагрузки</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={load}></FormControl></Col>

                            <Col lg={3} sm={3}>Индекс скорости</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={speed}></FormControl></Col>

                            <Col lg={3} sm={3}>Сезонность</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={time}></FormControl></Col>

                            <Col lg={3} sm={3}>Тип кузова</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={ts}></FormControl></Col>

                            <Col lg={3} sm={3}>Ширина/Высота/Диаметр</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={width}></FormControl></Col>

                            <Col lg={3} sm={3}>Беспрокольные</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={rf}></FormControl></Col>

                            <Col lg={3} sm={3}>Шипованные</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={thorn}></FormControl></Col>

                            <Col lg={3} sm={3}>Цена</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={price}></FormControl></Col>

                            <Col lg={3} sm={3}>Старая цена</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={price1}></FormControl></Col>

                            <Col lg={3} sm={3}>Количество</Col>
                            <Col lg={9} sm={9}><FormControl type="text" onChange={()=>{}} value={kol}></FormControl></Col>
                            {this.renderImage()}
                            <Col lg={12} sm={12}>
                                <h4>Описание товара</h4>
                                <Editor
                                    editorState={this.state.editorState}
                                    wrapperClassName="demo-wrapper"
                                    editorClassName="demo-editor"
                                    onEditorStateChange={this.onEditorStateChange.bind(this)}
                                />
                            </Col>
                            <Col lg={12} sm={12}>
                                <Button bsStyle="primary" onClick={()=>this.save()}>Сохранить</Button>
                            </Col>
                        </Row>
                    }
                    />
                </Col>
            </Row>
        </Grid>
      </div>
    )
  }
}
export default ShinyEdit;
