import React, {Component} from 'react';
import axios from 'axios';
import { DATAURL } from '../config';
import moment from 'moment';

class Alerts extends Component {
    state = {
        alerts: []
    }

    componentWillMount(){
        let requestURL = DATAURL + "alerts";
        axios.get(requestURL)
        .then((response)=>{
            let alerts = [...response.data];
            this.setState({
                alerts
            })
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    generateAlertCards = () => {
        let alertData = this.state.alerts.map((item, i)=>{
            let timeTillDone = moment().startOf(`${item.Activation.$date.$numberLong}`).fromNow();
            return(
                <div id={i} className="alert_card">
                test
                    {item.MissionInfo.faction}
                    {timeTillDone}
                    
                </div>
            );
        });
        return alertData;
    }

    render(){
        console.log(this.state.alerts);
        return(
            <div className="alert_wrapper">
                {this.generateAlertCards()}
            </div>
        );
    }
}

export default Alerts;