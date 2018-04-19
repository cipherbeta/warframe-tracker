import React, {Component} from 'react';

//import offCanvas
import OffCanvasMenu from './offCanvas';

class Header extends Component {

    state = {
        sideBarActive: false,
        hoverActive: false
    }

    handleSideNavClick = () => {
        if(this.state.sideBarActive){
            this.setState({
                sideBarActive: false,
                hoverActive: false
            });
        } else {
            this.setState({
                sideBarActive: true
            });
        }
    }

    handleSideNavHover = () => {
        if(!this.state.sideBarActive){
            return;
        } else if(!this.state.hoverActive) {
            this.setState(prevState => ({
                hoverActive: !prevState.hoverActive
            }));
        }
    }

    render(){
        return(
        <div className="header_wrapper">
            <div 
                onClick={this.handleSideNavClick}
                className={this.state.sideBarActive
                ? "header_sideNav_toggle active" : "header_sideNav_toggle"}>
                <div className="header_sideNav_toggle_wrapper">
                    <div className={this.state.sideBarActive ? "header_sideNav_burger active" : "header_sideNav_burger"}></div>
                    <div className={this.state.sideBarActive ? "header_sideNav_burger hidden" : "header_sideNav_burger"}></div>
                    <div className={this.state.sideBarActive ? "header_sideNav_burger active" : "header_sideNav_burger"}></div>
                </div>

            </div>
            <div className="header_title">
            Warframe Tracker
            </div>
            <div className="header_ver">
            v0.0.1
            </div>
            <OffCanvasMenu
                isActive={this.state.sideBarActive}
                hoverActive={this.state.hoverActive}
                gotHover={this.handleSideNavHover}/>
        </div>
        );
    }
}

export default Header;