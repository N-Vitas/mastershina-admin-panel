import queryApi from '../models/queryApi';
import Pitstop from '../models/pitstop.jsx';
import Disc from '../models/disc';
import { setSuccess, setError } from './handlers';
export const DISC_LOAD_LIST = 'DISC_LOAD_LIST';
export const DISC_NEW_LOAD_LIST = 'DISC_NEW_LOAD_LIST';

export const fetchNoImagesList = (token) => {
    return (dispatch) => {
        queryApi(token).get('pitstop/disc-no-pick')
        .then((r) => {
            if(Array.isArray(r.data)){
                let list = [];
                for(let index in r.data){
                    const disc = new Pitstop();
                    disc.setAttributes(r.data[index]);
                    list.push(disc)
                }
                dispatch({ type:DISC_LOAD_LIST, list });
                dispatch(setSuccess("Информация дисков от старого сайта успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки дисков от старого сайта."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
    }
}

export const fetchNewNoImagesList = (token) => {
    return (dispatch) => {
        queryApi(token).get('disc/no-pick')
        .then((r) => {
            if(Array.isArray(r.data)){
                let list = [];
                for(let index in r.data){
                    const newDisc = new Disc();
                    newDisc.setAttributes(r.data[index]);
                    list.push(newDisc)
                }
                dispatch({ type:DISC_NEW_LOAD_LIST, list });
                dispatch(setSuccess("Информация дисков от старого сайта успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки дисков от старого сайта."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
    }
}