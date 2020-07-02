import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Industries } from './../../utils'
class SelectIndustry extends Component {

	constructor(props) {
		super(props);
		this.state = {
			industries: Industries
		}
	}

	render() {

		return (
			<div className="container-fluid main-container">
				<div className="row">
					<div className="col-md-6">
						<div className="row">
							<a title="online time tracking" class="welcome-top-logo" href="/"><img alt="online time tracking" width="130" src="https://d2elkgkdx2cp5d.cloudfront.net/assets/hubstaff/logos/HS_text_logo_black-18504e00c286dca13b2c503b94d1eabdf6e1c45257ca558b78095c4e184a020c.svg" /></a>
						</div>
						<div className="col-md-offset-2 col-md-8">
							<h2>Choose your industry</h2>
							<p>This will help us customize your account</p>
							<div className="industry-section">
								{this.state.industries.map((industry) => {
									return (
										<div>
											<p>{industry.title}</p>
											{industry.children.length ? industry.children.map((child) => {
												return <Link to={`/organizations/wizard/main?group=${industry.group}&industry=${child}`} className="child">{child}</Link>
											}) : <div>
												<a><span className="child">{industry.hintText}</span></a>
											</div>}
										</div>
									)
								})}
							</div>
						</div>
					</div>
					<div className="col-md-6 welcome-illustration-wrapper select-industry">
						<img src="https://d2elkgkdx2cp5d.cloudfront.net/assets/wizard/select-industry-0622c4edb012e13a19e90941ea537427d1bf747f19dfb4407baadf39ab15714a.svg"></img>
					</div>
				</div>
			</div>
		);
	}
}
export default SelectIndustry;
