import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// hoc's
import Layout from './hoc/layout';

// import our components
import Home from './pages/home';
import Alerts from './pages/alerts/alerts';
import AlertItem from './pages/alerts/alert_item';
import Events from './pages/events';
import Sorties from './pages/sorties';
import Invasions from './pages/invasions';
import ActiveMissions from './pages/activeMissions';
import FlashSales from './pages/flashSales';



class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/alerts" exact component={Alerts}/>
                    <Route path="/alerts/*" component={AlertItem}/>
                    <Route path="/events" exact component={Events}/>
                    <Route path="/sorties" exact component={Sorties}/>
                    <Route path="/invasions" exact component={Invasions}/>
                    <Route path="/active_missions" exact component={ActiveMissions}/>
                    <Route path="/flash_sales" exact component={FlashSales}/>
                </Switch>
            </Layout>
        );
    }
}

export default Routes;