import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import AppbarComponent from "./dashboardComponent";


export default class Routes extends Component {
    render() {
        return (
            // <Router>
                <AppbarComponent />
                // <Fragment>
            //         <Switch>
            //             <Route  exact path="/" component={}/>
            //         </Switch >
            //     </Fragment>
            // </Router>


        );
    }
}