import queryApi from '../models/queryApi';
import Pitstop from '../models/pitstop';
import Shiny from '../models/shiny';
import { setSuccess, setError } from './handlers';
export const SHINY_LOAD_LIST = 'SHINY_LOAD_LIST';
export const SHINY_NEW_LOAD_LIST = 'SHINY_NEW_LOAD_LIST';
export const SHINY_SEARCH_LIST = 'SHINY_SEARCH_LIST';
export const SHINY_START_LOAD = 'SHINY_START_LOAD';
export const SHINY_STOP_LOAD = 'SHINY_STOP_LOAD';
export const SHINY_SELECT_LOAD = 'SHINY_SELECT_LOAD';

export const startLoad = () => ({ type: SHINY_START_LOAD });
export const stopLoad = () => ({ type: SHINY_STOP_LOAD });
export const pushEdit = (model) => ({ type: SHINY_SELECT_LOAD, model});

export const deleteItem = (token,model,callback) => {
    return (dispatch) => {
        dispatch(startLoad());
        queryApi(token).post('pitstop/delete-all/'+model.id)
        .then((r) => {
            callback(r);
            dispatch(stopLoad())
        }).catch((err)=>{
            dispatch(stopLoad())
            dispatch(setError("Не возможно сделать запрос. Возможно отсутствует интернет!"));
        });
    }
}

export const fetchSearch = (token,page=1,search={},sort='',limit=10) => {
    return (dispatch) => {
        dispatch(startLoad());
        queryApi(token).get(Pitstop.createSearch('shiny',search,page,sort,limit))
        .then((r) => {
            if(Array.isArray(r.data.models)){
                let list = [];
                r.data.models.forEach((params)=>{
                    const shiny = new Pitstop();
                    shiny.setAttributes(params);
                    list.push(shiny)
                });
                dispatch({ type:SHINY_SEARCH_LIST, list, count: r.data.count, total: r.data.total, search, page, sort });
                dispatch(setSuccess("Информация шин от старого сайта успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки шин от старого сайта."));
            }
        }).catch((err)=>{
            dispatch(setError("Не возможно сделать запрос. Возможно отсутствует интернет!"));
        });
    }
}

export const fetchNoImagesList = (token) => {
    return (dispatch) => {
        queryApi(token).get('pitstop/shiny-no-pick')
        .then((r) => {
            if(Array.isArray(r.data)){
                let list = [];
                r.data.forEach((params)=>{
                    const shiny = new Pitstop();
                    shiny.setAttributes(params);
                    list.push(shiny)
                });
                dispatch({ type:SHINY_LOAD_LIST, list });
                dispatch(setSuccess("Информация шин от старого сайта успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки шин от старого сайта."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
    }
}

export const fetchNewNoImagesList = (token) => {
    return (dispatch) => {
        queryApi(token).get('shiny/no-pick')
        .then((r) => {
            if(Array.isArray(r.data)){
                let list = [];
                r.data.forEach((params)=>{
                    const shiny = new Shiny();
                    shiny.setAttributes(params);
                    list.push(shiny)
                });
                dispatch({ type:SHINY_NEW_LOAD_LIST, list });
                dispatch(setSuccess("Информация шин от нового сайта успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки шин от нового сайта."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
    }
}