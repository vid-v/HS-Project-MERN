import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';
import Registration from './Registration';
import SelectIndustry from './../containers/orginization/SelectIndustry';
import { IndustryMainContainer } from "../containers/orginization/IndustryMain";
import SelectFeatures from "../containers/orginization/SelectFeatures";
import SelectPlans from "../containers/orginization/SelectPlans";
import Organizations from "./organization/Organizations";


class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/register" component={Registration} />
						<Route exact path="/login" component={Login} />
						
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/organizations" component={Organizations} />
						{/* <Route exact path="/welcome/select_industry" component={SelectIndustry} />
						<Route exact path="/organizations/wizard/main" component={IndustryMainContainer} />
						<Route exact path="/organizations/wizard/:orgId" component={SelectFeatures} />
						<Route exact path="/organizations/:orgId/plans" component={SelectPlans} /> */}

						{/* <Redirect from="/" to="login" /> */}
					</Switch>
				</div>
			</Router>
		);
	}
}
export default App;
