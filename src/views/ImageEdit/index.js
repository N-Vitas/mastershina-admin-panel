import React, { Component } from 'react';
import {
    Grid, Row, Col, Modal, Button
} from 'react-bootstrap';
import { Card } from '../../components/Card/Card.jsx';
import ImagesSite from '../../containers/Images/ImagesSite';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import config from '../../config';

class ImagesEdit extends Component {
    constructor(props) {
        super(props);
        const { itemEdit } = this.props;
        let state = {};
        try{
            const blocksFromHTML = convertFromHTML(itemEdit.description);
            state = EditorState.createWithContent(ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap,
            ));
        }catch(e){
            state = EditorState.createEmpty();
        }
        this.state = {
            editorState: state,
            dialog:false
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
    const {imagePreviewUrl, selected, itemEdit, uploadFile } = this.props;
    if (imagePreviewUrl) {
        return (
            <form className="previews" onSubmit={(e)=>this._handleSubmit(e)}>
                <img className="preview-img" src={imagePreviewUrl} alt={itemEdit.title} /> 
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Button type="button" bsStyle="info">
                    <input className="preview-file" 
                        type="file" 
                        onChange={(e)=>this._handleImageChange(e)} /> 
                        <i className="pe-7s-plus"></i> Выбрать изображение
                    </Button>
                    <Button type="button" onClick={()=>this.open()} bsStyle="primary"> <i className="pe-7s-download"></i> Выбрать изображение c сайта</Button>
                    <Button type="button" onClick={()=>this.uploadFile()} bsStyle="success"> <i className="pe-7s-upload"></i> Загрузить на сайт</Button>
                </div>
            </form>
        );
    }else if(selected){
        return (
            <form className="previews">
                <img className="preview-img" src={`${config.HOST_URL}upload/images/${selected}`} alt={itemEdit.title} />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Button type="button" bsStyle="info">
                        <i className="pe-7s-plus"></i> Выбрать изображение
                        <input className="preview-file" 
                            type="file" 
                            onChange={(e)=>this._handleImageChange(e)} /> 
                    </Button>
                    <Button type="button" onClick={()=>this.open()} bsStyle="primary"> <i className="pe-7s-download"></i> Выбрать изображение c сайта</Button>
                    <Button type="button" disabled bsStyle="success"> <i className="pe-7s-upload"></i> Загрузить на сайт</Button>
                </div>
            </form>
        );
    }
    else{
        return (
            <form className="previews">
                <img className="preview-img" src={`${config.HOST_URL}upload/images/${itemEdit.images}`} alt={itemEdit.title} />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <Button type="button" bsStyle="info">
                        <i className="pe-7s-plus"></i> Выбрать изображение
                        <input className="preview-file" 
                            type="file" 
                            onChange={(e)=>this._handleImageChange(e)} /> 
                    </Button>
                    <Button type="button" onClick={()=>this.open()} bsStyle="primary"> <i className="pe-7s-download"></i> Выбрать изображение c сайта</Button>
                    <Button type="button" disabled bsStyle="success"> <i className="pe-7s-upload"></i> Загрузить на сайт</Button>
                </div>
            </form>
        );
    }
  }
  render() {
    const { itemEdit } = this.props;
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
                    title={itemEdit.title}
                    content={
                        <Row>
                            <Col lg={12} sm={12}>
                                {this.renderImage()}
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
export default ImagesEdit;
