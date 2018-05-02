import { connect } from 'react-redux';
import actions from '../../actions';
import Auth from '../../views/Auth/Auth';

const {
    user: { setLogin, setPassword, authQuery }
} = actions;

export default connect(
    ({ user }) => ({...user}),
    dispatch => ({
        changePass: (password) => dispatch(setPassword(password.target.value)),
        changeLogin: (login) => dispatch(setLogin(login.target.value)),
        submitForm: (login,password) => {          
            dispatch(authQuery(login,password))
        },
    })
)(Auth);