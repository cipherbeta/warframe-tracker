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
        let eventData = this.state.events.reverse().map((item, i)=>{
            let date = DATEFIX(item.Date.$date.$numberLong);
            return(
                <a key={item._id.$oid} href={item.Prop} target="_blank">
                    <div className="event_card" style={{backgroundImage: `linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.75)),url(${item.ImageUrl})`}}>
                        <h1 className="event_title">{item.Messages[0].Message}</h1>
                        <h2 className="event_date">{date}</h2>
                    </div>
                </a>
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