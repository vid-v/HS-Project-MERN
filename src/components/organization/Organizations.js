import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Industries } from './../../utils'
import PopupSupport from "../PopupSupoort";
import Header from "../Header";
import SideBar from "../SideBar";

class Organizations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            industries: Industries
        }
    }

    render() {

        return (
            <div className="app-main-div--vertical">
                <Header />
                <div class="main-body-container">
                    <SideBar />
                    <div className="main-body-content-container flex">
                        <div className="review-dib-block">
                            <div className="div-block-383">
                                <div className="div-block-384">
                                    <div className="div-block-385"><img src="images/HS_logo.svg" alt="" /></div>
                                    <div className="div-block-386">
                                        <div></div>
                                    </div>
                                </div>
                                <div className="div-block-387">
                                    <h4 className="h4-display-1 text-nomargin">Are you enjoying Hubstaff?</h4>
                                    <div className="p-style-3">Share the love by leaving a review. It only takes 1 minute.</div>
                                </div>
                            </div>
                            <div className="div-block-388"><a href="#" className="btn-style1 right-margin-10px w-button">Leave a Review</a><a data-w-id="67792c34-5ea1-cccf-f706-ab309d9577ab" href="#" className="btn-style-3 rightmargin-10px w-button">Maybe Later</a><a data-w-id="67792c34-5ea1-cccf-f706-ab309d9577ad" href="#" className="btn-link-style2">Don&#x27;t ask me again</a></div>
                        </div>
                        <div className="div-block-469">
                            <div className="heading-div">
                                <h2 className="h2-display-2">Organizations</h2>
                            </div>
                            <div data-duration-in="300" data-duration-out="100" className="organizations-tab w-tabs">
                                <div className="tabs-link-1 w-tab-menu">
                                    <a data-w-tab="Tab 2" className="tabs-link-1 w-inline-block w-tab-link w--current">
                                        <div>Active (1)</div>
                                    </a>
                                    <a data-w-tab="Tab 3" className="tabs-link-1 w-inline-block w-tab-link">
                                        <div>Archived (0)</div>
                                    </a>
                                </div>
                                <div className="tabs-content-2 w-tab-content">
                                    <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                                        <div className="div-block-475 align-right">
                                            <div><a href="#" className="btn-style1 w-button">Add organization</a></div>
                                        </div>
                                        <div className="div-block-476 _2">
                                            <div className="table-activity-style-1">
                                                <div className="thead style-1">
                                                    <div className="_2-column align-left">
                                                        <div className="th-2">
                                                            <h4 className="tb-heading-style1"><strong>Name</strong></h4>
                                                        </div>
                                                    </div>
                                                    <div className="_2-column align-right"></div>
                                                </div>
                                                <div className="w-form">
                                                    <form id="email-form-5" name="email-form-5" data-name="Email Form 5">
                                                        <div className="tbody color-gray style-1">
                                                            <div className="tb-data-row no-border">
                                                                <div className="_2-column">
                                                                    <div className="td align-left">
                                                                        <div className="div-block-363">
                                                                            <div className="div-block-486">G</div>
                                                                            <div className="tb-project-label-2"><a href="projects.html" className="link-2">WEBBM</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="_2-column">
                                                                    <div className="td align-right">
                                                                        <div data-delay="0" className="dropdown-style1-3 w-dropdown">
                                                                            <div className="dropdown-toggle-style1-3 w-dropdown-toggle">
                                                                                <div className="w-icon-dropdown-toggle"></div>
                                                                                <div>Actions</div>
                                                                            </div>
                                                                            <nav className="dropdown-menu-style1-2 w-dropdown-list">
                                                                                <div className="div-block-495">
                                                                                    <a href="#" className="actions-options greyedout w-inline-block">
                                                                                        <div>Leave</div>
                                                                                    </a>
                                                                                    <div className="actions-tooltips">
                                                                                        <div className="tooltip-inner-2 _w-230">
                                                                                            <div className="tooltip-text text-center">Modifying time settiing disabled. </div>
                                                                                        </div>
                                                                                        <div className="tooltip-bottom-arrow bottom"></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="div-block-495">
                                                                                    <div className="actions-tooltips">
                                                                                        <div className="tooltip-inner-2 _w-230">
                                                                                            <div className="tooltip-text text-center">Modifying time settiing disabled. </div>
                                                                                        </div>
                                                                                        <div className="tooltip-bottom-arrow bottom"></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="div-block-495">
                                                                                    <div className="actions-tooltips">
                                                                                        <div className="tooltip-inner-2 _w-230">
                                                                                            <div className="tooltip-text text-center">Modifying time settiing disabled. </div>
                                                                                        </div>
                                                                                        <div className="tooltip-bottom-arrow bottom"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </nav>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="w-form-done">
                                                        <div>Thank you! Your submission has been received!</div>
                                                    </div>
                                                    <div className="w-form-fail">
                                                        <div>Oops! Something went wrong while submitting the form.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-w-tab="Tab 3" className="w-tab-pane">
                                        <div className="div-block-334">
                                            <div className="table-activity-style-1">
                                                <div className="thead style-1 hide">
                                                    <div className="_2-column align-left">
                                                        <div className="th-2">
                                                            <h4 className="tb-heading-style1"><strong>Organization</strong></h4>
                                                        </div>
                                                    </div>
                                                    <div className="_2-column align-left">
                                                        <div className="th-2">
                                                            <h4 className="tb-heading-style1"><strong>Integration</strong></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tbody color-gray style-1">
                                                    <div className="tb-data-row no-border">
                                                        <div>No archived organizations</div>
                                                    </div>
                                                    <div className="tb-data-row no-border hide">
                                                        <div className="_4-column align-left _1">
                                                            <div className="td"></div>
                                                        </div>
                                                        <div className="_4-column align-left _2">
                                                            <div className="td"></div>
                                                        </div>
                                                        <div className="_4-column align-left _3">
                                                            <div className="td"></div>
                                                        </div>
                                                        <div className="_4-column align-left _4">
                                                            <div className="td"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PopupSupport />
                </div>
            </div>
        );
    }
}
export default Organizations