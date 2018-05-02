import axios from 'axios';
import queryApi from '../models/queryApi'
import config from '../config';
import { setError, setSuccess } from './handlers';
export const IMAGES_LOAD_LIST = 'IMAGES_LOAD_LIST';
export const IMAGES_SELECTED_ITEM = 'IMAGES_SELECTED_ITEM';
export const IMAGES_SELECTED_FILE = 'IMAGES_SELECTED_FILE';
export const IMAGES_REFRESH = 'IMAGES_REFRESH';
export const IMAGES_PAGE_EDIT = 'IMAGES_PAGE_EDIT';
export const IMAGES_UPLOAD_DONE = 'IMAGES_UPLOAD_DONE';

export const getImageList = () => {
    return (dispatch) => {
        axios.get(`${config.HOST_URL}upload/images/`)
        .then((r) => {
            if(Array.isArray(r.data)){
                dispatch({ type:IMAGES_LOAD_LIST, list: r.data });
            }else{
                dispatch(setError("Произошла ошибка загрузки дисков от старого сайта."));
            }
        })
    }
}

export const selectedImage = (selected) => ({ type: IMAGES_SELECTED_ITEM, selected});
export const selectedFileImage = (file,imagePreviewUrl) => ({ type: IMAGES_SELECTED_FILE, file, imagePreviewUrl});

export const uploadFile = (file) => {
    return dispatch => {
        var data = new FormData();
        data.append('ImagesFile[file]', file);
        // var config = {
        // onUploadProgress: function(progressEvent) {
        //     var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
        // }
        // };
        axios.post(config.BASE_URL+'images/upload', data)
        .then(function (res) {
            console.log('res.result',res, res.result);
            if(res.data.result){                
                dispatch({ type : IMAGES_UPLOAD_DONE});
                dispatch(setSuccess("Файл успешно загружен на сервер."));
            }else{
                dispatch(setError("Произошла ошибка загрузки изображения на сервер."));
            }
        })
        .catch(function (err) {
            console.log('catch',dispatch,err);
            dispatch(setError("Произошла ошибка загрузки изображения на сервер."));
        });
    }
}

export const pushEdit = (edit) => ({ type: IMAGES_PAGE_EDIT, edit});

export const updateProduct = (token,data) => {
    return dispatch => {
        queryApi(token).post('images/update-product',data)
        .then((r) => {
            if(r.data.result){
                dispatch({ type:'IMAGES_REFRESH' });
                dispatch(setSuccess("Продукт успешно сохранен."));
            }else{
                dispatch(setError("Произошла ошибка сохранения продукта."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
    }
}
