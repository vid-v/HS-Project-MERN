import React, { Component } from "react";

import { Features, ColorCodes } from './../../utils'
import { Link } from "react-router-dom";
class SelectFeatures extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features: Features,
            projects: [
                'Virtual Assistant',
                'Social Media',
            ],
            colorCode: ColorCodes,
            step: 1
        }
    }

    addProject() {
        const { projects } = this.state;
        this.setState({
            projects: [...projects, '']
        })
    }

    removeProject(index) {

        const { projects } = this.state;
        projects.splice(index, 1);
        this.setState({
            projects
        })
    }


    handleProjectChange(e, index) {
        const { projects } = this.state;
        projects[index] = e.target.value;
        this.setState({ projects })
    }
    render() {

        return (
            <div className="container-fluid main-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <a title="online time tracking" className="welcome-top-logo" href="/"><img alt="online time tracking" width="130" src="https://d2elkgkdx2cp5d.cloudfront.net/assets/hubstaff/logos/HS_text_logo_black-18504e00c286dca13b2c503b94d1eabdf6e1c45257ca558b78095c4e184a020c.svg" /></a>
                        </div>
                        {
                            this.state.step === 1 ? (
                                <div className="organization-select-features col-md-offset-2 col-md-8 ">
                                    <h2 className="title">Select your features</h2>
                                    <p>How will you be using Hubstaff? Don't worry, you can change these later.</p>
                                    <div className="features-section">
                                        {this.state.features.map((feature, index) => {
                                            return (
                                                <span key={index} className="feature half">
                                                    <i className={`${feature.icon} fa-2x`}></i>
                                                    <p className="title">{feature.title}</p>
                                                    <span>{feature.addonInfo}</span>
                                                </span>
                                            )
                                        })}
                                        <div className="action-btn">
                                            <button onClick={(e) => { this.setState({ step: 2 }) }} className="btn btn-success pull-right">Continue</button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                    <div className="organization-select-features col-md-offset-2 col-md-8 ">
                                        <h2>Create your first project</h2>
                                        <p>A project is a category of work within an organization. Projects have their own teams, budgets, to-dos, and bill/pay rates. Your team will track time to projects and the to-dos within them.</p>
                                        <div className="projects-section">
                                            {this.state.projects.map((project, index) => {
                                                return (
                                                    <div className="row form-group" key={index}>
                                                        <input onChange={(e) => { this.handleProjectChange(e, index) }} value={project} className="form-control" style={{ borderLeftColor: this.state.colorCode[index] }}></input>
                                                        {index > 0 ? (
                                                            <span onClick={(e) => { this.removeProject(index) }} className="add-project">
                                                                <i className="fa fa-times"></i>
                                                            </span>
                                                        ) : null}
                                                    </div>

                                                )
                                            })}
                                            <a href="javascript:void(0);" onClick={(e) => { this.addProject() }} className="plus-border"> <i className="fa fa-plus fa-2x"></i></a>
                                            <p>Great start! You can edit and add more projects later.</p>
                                            <div className="action-btn">
                                                <Link to={'/organizations/111111/plans'} className="btn btn-success pull-right">Continue</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                    <div className="col-md-6 welcome-illustration-wrapper select-industry">
                        <img src="https://d2elkgkdx2cp5d.cloudfront.net/assets/wizard/select-industry-0622c4edb012e13a19e90941ea537427d1bf747f19dfb4407baadf39ab15714a.svg"></img>
                    </div>
                </div>
            </div>
        );
    }
}
export default SelectFeatures;
