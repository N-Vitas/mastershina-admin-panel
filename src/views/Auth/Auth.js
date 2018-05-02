import React, { Component } from 'react';
import {
    Row, Col,
} from 'react-bootstrap';

import {Card} from '../../components/Card/Card.jsx';
import {FormInputs} from '../../components/FormInputs/FormInputs.jsx';
import Button from '../../elements/CustomButton/CustomButton.jsx';

class Auth extends Component {
    submitForm(){
        const{ login, password, submitForm } = this.props;
        submitForm(login,password);
    }
    render() {
        const { login, password, changeLogin, changePass } = this.props;
        return (
            <div className="content auth-content">
                <Row className="auth">
                    <Col>
                        <Card
                            title="Авторизация"
                            content={
                                <form onSubmit={(e) => {e.preventDefault(); this.submitForm()}}>
                                    <FormInputs
                                        ncols = {["col-md-12"]}
                                        proprieties = {[
                                            {
                                                label : "Логин",
                                                type : "text",
                                                bsClass : "form-control",
                                                placeholder : "Введите логин",
                                                defaultValue : "",
                                                value: login,
                                                onChange: changeLogin,
                                            }
                                        ]}
                                    />
                                    <FormInputs
                                        ncols = {["col-md-12"]}
                                        proprieties = {[
                                            {
                                                label : "Пароль",
                                                type : "password",
                                                bsClass : "form-control",
                                                defaultValue : "michael23",
                                                value: password,
                                                onChange: changePass
                                            }
                                        ]}
                                    />
                                    <Button
                                        bsStyle="info"
                                        pullRight
                                        fill
                                        type="submit"
                                    >
                                        Войти
                                    </Button>
                                    <div className="clearfix"></div>
                                </form>
                            }
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Auth;
