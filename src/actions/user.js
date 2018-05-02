import queryApi from '../models/queryApi';
import config from '../config';
import { setError } from './handlers';
export const AUTH_CHANGE_LOGIN = "AUTH_CHANGE_LOGIN";
export const AUTH_CHANGE_PASSWORD = "AUTH_CHANGE_PASSWORD";
export const AUTH_SET_USER = "AUTH_SET_USER";

export const setLogin = login => ({ type: AUTH_CHANGE_LOGIN, login });
export const setPassword = password => ({ type: AUTH_CHANGE_PASSWORD, password });
export const authQuery = (login,password) => {
    return (dispatch) => {
        queryApi(config.TOKEN).post('login/token',{LoginForm:{username:login,password}})
        .then((res)=>{
            console.log('setLogin',res)
            if(res.data.auth_key){
                dispatch({
                    type:AUTH_SET_USER,
                    token:res.data.auth_key,
                    email:res.data.email,
                    firstname:res.data.firstname,
                    lastname:res.data.lastname,
                    secondname:res.data.secondname,
                });
                return;
            }
            dispatch(setError('Неверный логин или пароль'));
        })
        .catch((err)=>{
            dispatch(setError('Неверный логин или пароль')); 
        })
    };
}