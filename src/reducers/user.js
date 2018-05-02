import { AUTH_CHANGE_LOGIN, AUTH_CHANGE_PASSWORD, AUTH_SET_USER } from '../actions/user';

const initialState = {
    login: "",
    password: "",
    token: "_M1LIBXOBZ7Cs77O6NNqfvdNYQcnT0b_",
    loggedin: true,
    email: "nikonov.vitas@gmail.com",
    firstname: "Никонов",
    lastname: "Виталий",
    secondname: "Сергеевич"
};
const user = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_CHANGE_LOGIN:
            return {...state, login: action.login};
        case AUTH_CHANGE_PASSWORD:
            return {...state,password: action.password};
        case AUTH_SET_USER:
            return {...state,
                token:action.token,
                loggedin:true,
                email:action.email,
                firstname:action.firstname,
                lastname:action.lastname,
                secondname:action.secondname,
            }
        default:
            return state;
    }
};

export default user;