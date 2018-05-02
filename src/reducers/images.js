import { IMAGES_LOAD_LIST, IMAGES_SELECTED_ITEM, IMAGES_SELECTED_FILE, IMAGES_REFRESH, IMAGES_PAGE_EDIT, IMAGES_UPLOAD_DONE } from '../actions/images';

const initialState = {
    list: [],
    selected: null,
    file:{},
    imagePreviewUrl:'',
    upload:false,
    itemEdit:{
        code:"",
        title:"",
        images:"none_pic.jpg",
        description:"</br>",
    }
};
const images = (state = initialState, action) => {
    switch(action.type) {
        case IMAGES_LOAD_LIST:
            return {...state, list: action.list};
        case IMAGES_SELECTED_ITEM:
            return {...state, selected: action.selected, upload: true, imagePreviewUrl:null};
        case IMAGES_SELECTED_FILE:
            return {...state, file: action.file, selected:null, upload: false,  imagePreviewUrl: action.imagePreviewUrl}
        case IMAGES_PAGE_EDIT:
            return {...state, itemEdit: action.edit}
        case IMAGES_UPLOAD_DONE:
            const list = state.list;
            list.push(state.imagePreviewUrl)
            return {...state, upload: true, list}
        case IMAGES_REFRESH:
            return initialState;
        default:
            return state;
    }
};

export default images;