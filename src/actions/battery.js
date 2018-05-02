import queryApi from '../models/queryApi'
import Pitstop from '../models/pitstop';
import Battery from '../models/battery';
import { setSuccess, setError } from './handlers';
export const BATTERY_LOAD_LIST = 'BATTERY_LOAD_LIST';
export const BATTERY_NEW_LOAD_LIST = 'BATTERY_NEW_LOAD_LIST';

export const fetchNoImagesList = (token) => {
    return (dispatch) => {
        queryApi(token).get('pitstop/battery-no-pick')
        .then((r) => {
            if(Array.isArray(r.data)){ 
                let list = [];
                for(let index in r.data){
                    const battery = new Pitstop();
                    battery.setAttributes(r.data[index]);
                    list.push(battery)
                }
                dispatch({ type:BATTERY_LOAD_LIST, list });
                dispatch(setSuccess("Информация аккумуляторов от старого сайта успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки аккумуляторов от старого сайта."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
    }
}

export const fetchNewNoImagesList = (token) => {
    return (dispatch) => {
        queryApi(token).get('battery/no-pick')
        .then((r) => {
            if(Array.isArray(r.data)){
                let list = [];
                for(let index in r.data){
                    const newBattery = new Battery();
                    newBattery.setAttributes(r.data[index]);
                    list.push(newBattery)
                }
                dispatch({ type:BATTERY_NEW_LOAD_LIST, list });
                dispatch(setSuccess("Информация аккумуляторов от старого сайта успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки аккумуляторов от старого сайта."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
    }
}