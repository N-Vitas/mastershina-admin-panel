import queryApi from '../models/queryApi'
import { setSuccess, setError } from './handlers';

export const DASHBOARD_NO_IMAGES = 'DASHBOARD_NO_IMAGES';
export const DASHBOARD_NO_DESCRIPTION = 'DASHBOARD_NO_DESCRIPTION';

export const fetchGlobalDashboard = (token) => {
    return (dispatch) => {
        queryApi(token).get('images/no-pick-count')
        .then((r) => {
            const { oldSite, newSite } = r.data;
            if(oldSite && newSite){
                dispatch({ type:DASHBOARD_NO_IMAGES, images: { oldSite, newSite } });
                dispatch(setSuccess("Статистика картинок успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки статистики изображений."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
        queryApi(token).get('description/no-description')
        .then((r) => {
            const { oldSite, newSite } = r.data;
            if(oldSite && newSite){
                dispatch({ type:DASHBOARD_NO_DESCRIPTION, description: { oldSite, newSite } });
                dispatch(setSuccess("Статистика описаний успешно загружена."));
            }else{
                dispatch(setError("Произошла ошибка загрузки статистики описаний."));
            }
        }).catch((err)=>{
            dispatch(setError(err.Error));
        });
    }
}
