import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import imagine from '../../assets/img/sidebar-4.jpg';
import logo from '../../assets/img/favicon.png';

import appRoutes from '../../routes/app.jsx';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    render(){
        const sidebarBackground = {
            backgroundImage: 'url(' + imagine + ')'
        };
        return (
            <div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
                <div className="sidebar-background" style={sidebarBackground}></div>
                    <div className="logo">
                        <a href="#/" className="simple-text logo-mini">
                            <div className="logo-img">
                                <img src={logo} alt="logo_image"/>
                            </div>

                        </a>
                        <a href="#/" className="simple-text logo-normal">
                            Мастершина
                        </a>
                    </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {
                            appRoutes.map((prop,key) => {
                                if(!prop.redirect && prop.hidden !== true)
                                    return (
                                        <li className={prop.upgrade ? "active active-pro":this.activeRoute(prop.path)} key={key}>
                                            <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                                <i className={prop.icon}></i>
                                                <p>{prop.name}</p>
                                            </NavLink>
                                        </li>
                                    );
                                return null;
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
