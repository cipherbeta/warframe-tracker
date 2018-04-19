import React, {Component} from 'react';
import axios from 'axios';
import { DATAURL, DATEFIX } from '../../config';
import {Link} from 'react-router-dom';

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
            let timeTillDone = DATEFIX(item.Expiry.$date.$numberLong);
            let rewards = "test";
            return(
                <Link key={i} to={`/alerts/${item._id.$oid}`}>
                    <div className="alert_card">
                        <h1 className="alert_missionType">{item.MissionInfo.missionType.replace("MT_", "")}</h1>
                        <h2 className="alert_faction">{item.MissionInfo.faction.replace("FC_", "")} {item.MissionInfo.minEnemyLevel} - {item.MissionInfo.maxEnemyLevel}</h2>
                        <hr/>
                        <small className="alert_expires">Expires {timeTillDone}</small>
                        <hr/>
                        <p className="alert_rewards">{rewards}</p>
                        <p className="alert_addInfo">click for more information</p>
                    </div>
                </Link>
            );
        });
        return alertData;
    }

    render(){
        return(
            <div className="alert_wrapper">
                {this.generateAlertCards()}
            </div>
        );
    }
}

export default Alerts;