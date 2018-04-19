import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// TODO: Refactor as map function so we can avoid the bloat.

class OffCanvasMenu extends Component {

    // Listen for clicks so we can handle clicks outside the component.
    componentWillMount() {
        document.addEventListener('mousedown', this.handleClickOutside, false);
    }


    // Once we're done, unmount so we don't carry into other components.
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
    }

    // Checks if click contains off canvas menu if it's active. If not, close menu.
    handleClickOutside = (e) => {
        if(!this.node.contains(e.target) && this.props.isActive){
            {this.props.gotClicked()}
        }
    }

    render(){

        return(
            <div className={this.props.isActive ? "offCanvas_wrapper active" : "offCanvas_wrapper"}
                onMouseEnter={this.props.gotHover}
                onClick={this.props.gotClicked}
                ref={node=> this.node = node}>
                <div className="offCanvas_iconLayer">
                    <div className={this.props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                        <Link to="/">
                        <div className="offCanvas_spreadLayer_displacement">
                            <div className="offCanvas_iconBox">H</div>
                            <div className="offCanvas_textBox">Home</div>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="offCanvas_iconLayer">
                    <div className={this.props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                        <Link to="/alerts">
                        <div className="offCanvas_spreadLayer_displacement">
                            <div className="offCanvas_iconBox">A</div>
                            <div className="offCanvas_textBox">Alerts</div>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="offCanvas_iconLayer">
                    <div className={this.props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                        <Link to="/events">
                        <div className="offCanvas_spreadLayer_displacement">
                            <div className="offCanvas_iconBox">E</div>
                            <div className="offCanvas_textBox">Events</div>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="offCanvas_iconLayer">
                    <div className={this.props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                        <Link to="/sorties">
                        <div className="offCanvas_spreadLayer_displacement">
                            <div className="offCanvas_iconBox">S</div>
                            <div className="offCanvas_textBox">Sorties</div>
                        </div>
                        </Link>
                    </div>
                </div>

                            <div className="offCanvas_iconLayer">
                    <div className={this.props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                        <Link to="/invasions">
                        <div className="offCanvas_spreadLayer_displacement">
                            <div className="offCanvas_iconBox">I</div>
                            <div className="offCanvas_textBox">Invasions</div>
                        </div>
                        </Link>
                    </div>
                </div>

                            <div className="offCanvas_iconLayer">
                    <div className={this.props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                        <Link to="/active_missions">
                        <div className="offCanvas_spreadLayer_displacement">
                            <div className="offCanvas_iconBox">AM</div>
                            <div className="offCanvas_textBox">Active Missions</div>
                        </div>
                        </Link>
                    </div>
                </div>

                            <div className="offCanvas_iconLayer">
                    <div className={this.props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                        <Link to="/flash_sales">
                        <div className="offCanvas_spreadLayer_displacement">
                            <div className="offCanvas_iconBox">FS</div>
                            <div className="offCanvas_textBox">Flash Sales</div>
                        </div>
                        </Link>
                    </div>
                </div>
                
                

            </div>
        );
    }
}

export default OffCanvasMenu;