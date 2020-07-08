import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Industries } from './../../utils'

class IndustryMain extends Component {

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

						<div className="create-organization-form col-md-offset-2 col-md-8 ">
							<h2>Create your organization</h2>
							<p>Set up your company in Hubstaff. These settings can be changed later.</p>
							<div className="my-20">
								<div className="form-group">
									<label htmlFor="name">ORGANIZATION NAME</label>
									<input name="name" placeholder="ORGANIZATION NAME" className="form-control" />
								</div>
								<div className="form-group">
									<label htmlFor="team_size">TEAM SIZE *</label>
									<select name="team_size" placeholder="TEAM SIZE" className="form-control">
										<option value=""></option>
										<option value="1">Just me</option>
										<option value="2-3">2-3</option>
										<option value="4-10">4-10</option>
										<option value="11+">11+</option>
									</select>
								</div>
								<div className="action-btn">
									<button className="btn btn-default">Cancel</button>
									<Link to={'/organizations/wizard/111111'} className="btn btn-success">Continue</Link>
								</div>
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
export default IndustryMain