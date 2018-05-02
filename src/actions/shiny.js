import queryApi from '../models/queryApi'
import Pitstop from '../models/pitstop';
import Shiny from '../models/shiny';
import { setSuccess, setError } from './handlers';
export const SHINY_LOAD_LIST = 'SHINY_LOAD_LIST';
export const SHINY_NEW_LOAD_LIST = 'SHINY_NEW_LOAD_LIST';

export const fetchNoImagesList = (token) => {
    return (dispatch) => {
        queryApi(token).get('pitstop/shiny-no-pick')
        .then((r) => {
            if(Array.isArray(r.data)){
                let list = [];
                for(let index in r.data){
                    const shiny = new Pitstop();
                    shiny.setAttributes(r.data[index]);
                    list.push(shiny)
                }
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
                for(let index in r.data){
                    const newShiny = new Shiny();
                    newShiny.setAttributes(r.data[index]);
                    list.push(newShiny)
                }
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