import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import Loading from '../../components/Loading/Loading';
import Auth from '../Auth/Auth';

import {style} from "../../variables/Variables.jsx";

import appRoutes from '../../routes/app.jsx';

import { connect } from 'react-redux';

class App extends Component {
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleNotificationClick = this.handleNotificationClick.bind(this);
        this.state = {
            _notificationSystem: null
        };
    }

    handleNotificationClick(position){
        var color = Math.floor((Math.random() * 4) + 1);
        var level;
        switch (color) {
            case 1:
                level = 'success';
                break;
            case 2:
                level = 'warning';
                break;
            case 3:
                level = 'error';
                break;
            case 4:
                level = 'info';
                break;
            default:
                break;
        }
        this.state._notificationSystem.addNotification({
            title: (<span data-notify="icon" className="pe-7s-gift"></span>),
            message: (
                <div>
                    Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.
                </div>
            ),
            level: level,
            position: position,
            autoDismiss: 5,
        });
    }

    handleNotification(){
       const {icon,message,level,position} = this.props;
        this.state._notificationSystem.addNotification({
            title: (<span data-notify="icon" className={icon}></span>),
            message: (<div>{message}</div>),
            level,
            position,
            autoDismiss: 5,
        });
    }

    componentDidMount(){
        this.setState({_notificationSystem: this.refs.notificationSystem});
    }
    componentDidUpdate(e,state){
        if (e.message !== this.props.message){
            this.handleNotification();
        }
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render() {     
        if(!this.props.user.loggedin){
            return (
                <div className="wrapper">
                    <NotificationSystem ref="notificationSystem" style={style}/>                    
                    <Loading show={this.props.loading} />
                    <Auth/>
                </div>
            );
        }
        return (
                <div className="wrapper">
                    <NotificationSystem ref="notificationSystem" style={style}/>                    
                    <Loading show={this.props.loading} />
                    <Sidebar {...this.props} />
                    <div id="main-panel" className="main-panel">
                        <Header {...this.props}/>
                        <Switch>
                            {
                                appRoutes.map((prop,key) => {
                                    if(prop.redirect)
                                        return (
                                            <Redirect from={prop.path} to={prop.to} key={key}/>
                                        );
                                    return (
                                        <Route path={prop.path} component={prop.component} key={key}/>
                                    );
                                })
                            }
                        </Switch>
                        <Footer />
                    </div>
                </div>
        );
    }
}

export default connect(
    ({ handlers, user }) => ({
        message: handlers.message,
        icon: handlers.icon,
        level: handlers.level,
        position: handlers.position,
        loading: handlers.loading,
        user
    }),
)(App);
