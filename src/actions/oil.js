import queryApi from '../models/queryApi'
import Pitstop from '../models/pitstop';
import Oil from '../models/oil';
import { setSuccess, setError } from './handlers';

export const OIL_LOAD_LIST = 'OIL_LOAD_LIST';
export const OIL_NEW_LOAD_LIST = 'OIL_NEW_LOAD_LIST';

export const fetchNoImagesList = (token) => {
    return (dispatch) => {
        queryApi(token).get('pitstop/oil-no-pick')
        .then((r) => {
            if(Array.isArray(r.data)){
                let list = [];
                for(let index in r.data){
                    const oil = new Pitstop();
                    oil.setAttributes(r.data[index]);
                    list.push(oil)
                }
                dispatch({ type:OIL_LOAD_LIST, list });
                dispatch(setSuccess("Информация масел от старого сайта успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки масел от старого сайта."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
    }
}

export const fetchNewNoImagesList = (token) => {
    return (dispatch) => {
        queryApi(token).get('oil/no-pick')
        .then((r) => {
            if(Array.isArray(r.data)){
                let list = [];
                for(let index in r.data){
                    const newOil = new Oil();
                    newOil.setAttributes(r.data[index]);
                    list.push(newOil)
                }
                dispatch({ type:OIL_NEW_LOAD_LIST, list });
                dispatch(setSuccess("Информация масел от старого сайта успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки масел от старого сайта."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
    }
}