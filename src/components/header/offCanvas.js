import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';

// TODO: Refactor as map function so we can avoid the bloat.

const OffCanvasMenu = (props) => {
    return(
        <div className={props.isActive ? "offCanvas_wrapper active" : "offCanvas_wrapper"} onMouseEnter={props.gotHover}>
            <div className="offCanvas_iconLayer">
                <div className={props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                    <Link to="/">
                    <div className="offCanvas_spreadLayer_displacement">
                        <div className="offCanvas_iconBox">H</div>
                        <div className="offCanvas_textBox">Home</div>
                    </div>
                    </Link>
                </div>
            </div>

            <div className="offCanvas_iconLayer">
                <div className={props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                    <Link to="/alerts">
                    <div className="offCanvas_spreadLayer_displacement">
                        <div className="offCanvas_iconBox">A</div>
                        <div className="offCanvas_textBox">Alerts</div>
                    </div>
                    </Link>
                </div>
            </div>

            <div className="offCanvas_iconLayer">
                <div className={props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                    <Link to="/events">
                    <div className="offCanvas_spreadLayer_displacement">
                        <div className="offCanvas_iconBox">E</div>
                        <div className="offCanvas_textBox">Events</div>
                    </div>
                    </Link>
                </div>
            </div>

            <div className="offCanvas_iconLayer">
                <div className={props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                    <Link to="/sorties">
                    <div className="offCanvas_spreadLayer_displacement">
                        <div className="offCanvas_iconBox">S</div>
                        <div className="offCanvas_textBox">Sorties</div>
                    </div>
                    </Link>
                </div>
            </div>

                        <div className="offCanvas_iconLayer">
                <div className={props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                    <Link to="/invasions">
                    <div className="offCanvas_spreadLayer_displacement">
                        <div className="offCanvas_iconBox">I</div>
                        <div className="offCanvas_textBox">Invasions</div>
                    </div>
                    </Link>
                </div>
            </div>

                        <div className="offCanvas_iconLayer">
                <div className={props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
                    <Link to="/active_missions">
                    <div className="offCanvas_spreadLayer_displacement">
                        <div className="offCanvas_iconBox">AM</div>
                        <div className="offCanvas_textBox">Active Missions</div>
                    </div>
                    </Link>
                </div>
            </div>

                        <div className="offCanvas_iconLayer">
                <div className={props.hoverActive ? "offCanvas_spreadLayer active" : "offCanvas_spreadLayer"}>
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

export default OffCanvasMenu;