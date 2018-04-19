import React, {Component} from 'react';
import axios from 'axios';
import { DATAURL, DATEFIX } from '../config';

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
            let date = DATEFIX(item.Date.$date.$numberLong);
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