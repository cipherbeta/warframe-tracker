import React, {Component} from 'react';
import axios from 'axios';
import { DATAURL } from '../config';
import moment from 'moment';

class Events extends Component {
    state = {
        events: []
    }

    componentWillMount(){
        let requestURL = DATAURL + "events"
        axios.get(requestURL)
        .then((response)=>{
            let events = [...response.data];
            this.setState({
                events
            });
        })
        .catch((e)=>{
            console.log(e);
        });
    }

    generateEventCards = () => {
        let eventData = this.state.events.map((item, i)=>{
            let date = moment.unix(item.Date.$date.$numberLong.substring(0,10)).calendar();
            return(
                <div key={item._id.$oid}>
                    {date}
                </div>
            );
        });

        return eventData;
    }

    render(){
        console.log(this.state.events);
        return(
            <div className="event_wrapper">
                {this.generateEventCards()}
            </div>
        );
    }
}

export default Events;