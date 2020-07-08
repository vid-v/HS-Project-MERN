import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Header from './Header';
import SideBar from './SideBar'
import PopupSupport from './PopupSupoort';
export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_name: '',
            password: '',
            error: false,
            loginSuccess: false,
        };
    }

    handleOnChangeLogout = e => {
        this.setState({
            loginSuccess: false,
        });

        localStorage.setItem("login", "false");

    };
    renderLogin = () => {
        let islogin = localStorage.getItem("login")

        if (islogin == "false") {
            return <Redirect to='/login' />
        }

    }
    render() {

        return (
            //     {this.renderLogin() }    
            //         <h3 onClick={this.handleOnChangeLogout}>Logout</h3>
            <div>
                <div className="app-main-div--vertical">
                    <Header />
                    <div class="main-body-container">
                        <SideBar />
                        <div className="main-body-content-container">
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
                            <div className="insert-contents-here">
                                <div className="dashboard-content">
                                    <div className="title-div">
                                        <div className="div-block-389">
                                            <h2 className="h2-display-2 text-margin">Dashboard</h2>
                                            <div className="p-style-3">Mon, Jun 8, 2020 - Sun, Jun 14, 2020</div>
                                        </div>
                                        <div className="div-block-390">
                                            <div data-w-id="428ce2ae-1e3e-2eb0-18c1-bf2817e8e359" className="div-block-391"><img src="images/efficiency_pro-652b0dfae7ee9098d2295affca92f2e8bea3938087800d7d0c3d78ced5abe87d.svg" alt="" />
                                                <div className="div-block-456">
                                                    <div>x154</div>
                                                </div>
                                            </div>
                                            <div data-w-id="81832565-6e04-1896-dd0f-1b646a200f49" className="div-block-391"><img src="images/time_hero-2771a28f50fa5477734e2f5a2f488c088014b5192b49674787f74bc8b0fdcfbf.svg" alt="" />
                                                <div className="div-block-456">
                                                    <div>x17</div>
                                                </div>
                                            </div>
                                            <div style={{ opacity: 0 }} className="efficiency-tooltip">
                                                <div className="div-block-454">
                                                    <div><strong>Efficiency pro hot streak!</strong></div>
                                                </div>
                                                <div className="div-block-455">
                                                    <div>Your daily activity has been above 50% for 154 days in a row.</div>
                                                </div>
                                            </div>
                                            <div style={{ opacity: 0 }} className="time-hero-tooltip">
                                                <div className="div-block-454">
                                                    <div><strong>Time hero hot streak!</strong></div>
                                                </div>
                                                <div className="div-block-455">
                                                    <div>You worked over 40 hours for 17 weeks in a row.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-block-392">
                                        <div className="div-block-458"><a data-w-id="c4f26626-3258-6f13-502f-4c83497608f1" href="#" className="btn-outline-unique-ico nominw auto-width center w-button"><span className="label-btn-outlline-ico nomargin">Manage Widgets</span></a>
                                            <div className="widgets-options">
                                                <div className="dashboard-me-tab-widget">
                                                    <div className="div-block-459">
                                                        <div className="p-style-5">Small Widgets</div>
                                                    </div>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Earned this week</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Earned today</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Projects worked</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Today&#x27;s Activity</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Weekly Activity</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Worked this week</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Worked today</div>
                                                    </a>
                                                    <div className="submenu-divider"></div>
                                                    <div className="div-block-459">
                                                        <div className="p-style-5">Large Widgets</div>
                                                    </div>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Apps &amp; URLs</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Late &amp; Missed Shifts</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Manual Time</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Payments</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Projects</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Recent Activity</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>This week</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Time off balances</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Time off requested</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Timesheet</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>To-dos</div>
                                                    </a>
                                                </div>
                                                <div className="dashboard-all-tab-widget">
                                                    <div className="div-block-459">
                                                        <div className="p-style-5">Extra Large Widgets</div>
                                                    </div>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Maps</div>
                                                    </a>
                                                    <div className="submenu-divider"></div>
                                                    <div className="div-block-459">
                                                        <div className="p-style-5">Small widgets</div>
                                                    </div>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Members worked</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Projects worked</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Spent this week</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Spent today</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Today&#x27;s Activity</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Weekly Activity</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Worked this week</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Worked today</div>
                                                    </a>
                                                    <div className="submenu-divider"></div>
                                                    <div className="div-block-459">
                                                        <div className="p-style-5">Extra Large Widgets</div>
                                                    </div>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Amounts owed</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Apps &amp; URLs</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Client Budgets</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Invoices</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Late &amp; Missed Shifts</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Low activity</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Manual Time</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Members</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Project Budgets</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Projects</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>Recent activity</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>This week</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Time off requested</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Timesheets to approve</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check"></div>
                                                        <div>To-dos</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Upcoming time off</div>
                                                    </a>
                                                    <a href="#" className="widget-options w-inline-block">
                                                        <div className="widget-check opacity-zero"></div>
                                                        <div>Weekly limits</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-duration-in="300" data-duration-out="100" className="dashboard-tab w-tabs">
                                        <div className="tabs-menu-1 bottom-margin-30 w-tab-menu">
                                            <a data-w-tab="Tab 1" data-w-id="4f413640-6d17-0c50-86b3-3cf7018265c0" className="tabs-link-1 w-inline-block w-tab-link">
                                                <div>ME</div>
                                            </a>
                                            <a data-w-tab="Tab 2" data-w-id="4f413640-6d17-0c50-86b3-3cf7018265c3" className="tabs-link-1 w-inline-block w-tab-link w--current">
                                                <div>ALL</div>
                                            </a>
                                        </div>
                                        <div className="tabs-content-3 w-tab-content">
                                            <div data-w-tab="Tab 1" className="w-tab-pane">
                                                <div>
                                                    <div className="div-block-393">
                                                        <div className="div-block-394">
                                                            <div className="div-block-395">
                                                                <div className="h6-display-1-2">WEEKLY ACTIVITY <span className="hubstaff-icon"></span></div>
                                                                <div className="small-menu">
                                                                    <div data-w-id="328299c1-7df6-0d8d-da7b-e854c3e50346" className="div-block-397">
                                                                        <div></div>
                                                                    </div>
                                                                    <div className="small-menu-option">
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Remove</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-398">
                                                                <div className="div-block-399">
                                                                    <h4 className="h4-display-2">70%</h4>
                                                                    <div className="p-style-5 text-green"><span className="material-icon-font"></span>  1%</div>
                                                                </div>
                                                                <div className="div-block-400">
                                                                    <div className="div-block-401"><img src="images/Dashboard-01_1Dashboard-01.jpg" alt="" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-394">
                                                            <div className="div-block-395">
                                                                <div className="h6-display-1-2">WORKED THIS WEEK</div>
                                                                <div className="small-menu">
                                                                    <div data-w-id="fa155548-b200-f7dc-8187-96ad73de3c39" className="div-block-397">
                                                                        <div></div>
                                                                    </div>
                                                                    <div className="small-menu-option">
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Remove</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-398">
                                                                <div className="div-block-399">
                                                                    <h4 className="h4-display-2">36:38:10</h4>
                                                                    <div className="p-style-5 text-red"><span className="material-icon-font"></span> 8:58:15</div>
                                                                </div>
                                                                <div className="div-block-400">
                                                                    <div className="div-block-401"><img src="images/Dashboard-02_1Dashboard-02.jpg" alt="" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-394">
                                                            <div className="div-block-395">
                                                                <div className="h6-display-1-2">EARNED THIS WEEK <span className="hubstaff-icon"></span></div>
                                                                <div className="small-menu">
                                                                    <div data-w-id="fdb232e0-85aa-ba05-0903-8cbed2f76cac" className="div-block-397">
                                                                        <div></div>
                                                                    </div>
                                                                    <div className="small-menu-option">
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Remove</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-398">
                                                                <div className="div-block-399">
                                                                    <h4 className="h4-display-2">$0.00</h4>
                                                                    <div className="p-style-5">--</div>
                                                                </div>
                                                                <div className="div-block-400">
                                                                    <div className="div-block-401"><img src="images/Dashboard-03_1Dashboard-03.jpg" alt="" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-394 border-right-0">
                                                            <div className="div-block-395">
                                                                <div className="h6-display-1-2">PROJECTS WORKED</div>
                                                                <div className="small-menu">
                                                                    <div data-w-id="49cca373-1e14-e3df-2421-c23c566580ca" className="div-block-397">
                                                                        <div></div>
                                                                    </div>
                                                                    <div className="small-menu-option">
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Remove</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-398">
                                                                <div className="div-block-399">
                                                                    <h4 className="h4-display-2">1</h4>
                                                                    <div className="p-style-5">--</div>
                                                                </div>
                                                                <div className="div-block-400">
                                                                    <div className="div-block-401"><img src="images/Dashboard-04_1Dashboard-04.jpg" alt="" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="_2-column-cards">
                                                        <div className="div-block-410">
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">RECENT ACTIVITY</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="63c4248d-9bb4-19c2-84b6-45221d21d1a4" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-406">
                                                                    <div data-w-id="259a4dfb-1978-82b2-bdbc-25a6c4a6b9a5" className="screenshot-wrapper"><img src="images/SS_01.png" srcSet="images/SS_01-p-500.png 500w, images/SS_01-p-800.png 800w, images/SS_01.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>72%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-w-id="9b8a70c9-3ef8-2376-b0d9-094995ad0673" className="screenshot-wrapper"><img src="images/SS_02.png" srcSet="images/SS_02-p-500.png 500w, images/SS_02-p-800.png 800w, images/SS_02-p-1080.png 1080w, images/SS_02.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>80%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-w-id="1b91c347-b487-9e9a-57f4-d0ff15ab06ac" className="screenshot-wrapper"><img src="images/SS_03.png" srcSet="images/SS_03-p-500.png 500w, images/SS_03-p-800.png 800w, images/SS_03-p-1080.png 1080w, images/SS_03-p-1600.png 1600w, images/SS_03.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>65%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-w-id="e6a3f0a1-eea4-9328-ee85-d418892e0c5a" className="screenshot-wrapper"><img src="images/SS_06.png" srcSet="images/SS_06-p-500.png 500w, images/SS_06-p-800.png 800w, images/SS_06-p-1080.png 1080w, images/SS_06-p-1600.png 1600w, images/SS_06.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>87%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-w-id="a09572d6-bea6-0835-dd65-ae532203794f" className="screenshot-wrapper"><img src="images/SS_05.png" srcSet="images/SS_05-p-500.png 500w, images/SS_05-p-800.png 800w, images/SS_05.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>75%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-w-id="24a65874-3164-9ca2-390d-6c482ace860a" className="screenshot-wrapper"><img src="images/SS_04.png" srcSet="images/SS_04-p-500.png 500w, images/SS_04-p-800.png 800w, images/SS_04.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>73%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-409"><a href="activity.html" className="btn-link-style1">View activity <span className="hubstaff-icon"></span></a></div>
                                                            </div>
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">THIS WEEK</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="8c9971b6-68d3-9b9a-b034-b18001ab3e5a" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="graph-block"><img src="images/thisweek-graph.png" srcSet="images/thisweek-graph-p-500.png 500w, images/thisweek-graph.png 747w" sizes="(max-width: 479px) 40.1875px, (max-width: 767px) 24vw, (max-width: 991px) 30vw, 39vw" alt="" /></div>
                                                                <div className="div-block-409"><a href="reports/time-and-activities.html" className="btn-link-style1">View report <span className="hubstaff-icon"></span></a></div>
                                                            </div>
                                                            <div data-w-id="e440878a-3a72-5c95-ac8e-307bc295d99d" className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <div className="div-block-416">
                                                                        <h5 className="h5-display-2">TO-DOS</h5>
                                                                        <p className="p-style-5">Recently worked on to-do items.</p>
                                                                    </div>
                                                                    <div className="todo-button-div"><a href="to-dos.html" className="btn-style1 w-button">Add a to-do</a></div>
                                                                </div>
                                                                <div className="todo-image"><img src="images/todo_image.png" alt="" /></div>
                                                                <div className="todo-greyscreen"><a href="#" className="btn-icon1 hubstaff w-button"></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-410">
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">TIMESHEET</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="58117708-78a7-cae8-936d-b199131b6223" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Add time</div>
                                                                            </a>
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="div-block-403 overflow-auto">
                                                                        <div className="table-activity-style-1">
                                                                            <div className="thead-2 no-bordeer">
                                                                                <div className="_6-column _1st-row _w-25">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1">Project</h4>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_6-column _2nd-row _w-18-75">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1"><strong>Date</strong></h4>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_6-column _2nd-row _w-18-75">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1"><strong>Start time</strong></h4>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_6-column _2nd-row _w-18-75">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1"><strong>Stop time</strong></h4>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_6-column _2nd-row _w-18-75">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1"><strong>Duration</strong></h4>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tbody">
                                                                                <div className="tb-data-row no-side-border dashboard">
                                                                                    <div className="_6-column _1st-row _w-25">
                                                                                        <div className="div-block-402">G</div>
                                                                                        <div className="td-2">
                                                                                            <div>Graphic Design</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>Fri, Jun 12, 2020</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>2:21 am</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>2:24 am</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>0:02:53 $</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tbody">
                                                                                <div className="tb-data-row no-side-border dashboard">
                                                                                    <div className="_6-column _1st-row _w-25">
                                                                                        <div className="div-block-402">G</div>
                                                                                        <div className="td-2">
                                                                                            <div>Graphic Design</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>Fri, Jun 12, 2020</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>2:25 am</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>3:27 am</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>0:02:53 $</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tbody">
                                                                                <div className="tb-data-row no-side-border dashboard">
                                                                                    <div className="_6-column _1st-row _w-25">
                                                                                        <div className="div-block-402">G</div>
                                                                                        <div className="td-2">
                                                                                            <div>Graphic Design</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>Fri, Jun 12, 2020</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>3:32 am</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>5:34 am</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>2:02:12 $</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tbody">
                                                                                <div className="tb-data-row no-side-border dashboard last">
                                                                                    <div className="_6-column _1st-row _w-25">
                                                                                        <div className="div-block-402">G</div>
                                                                                        <div className="td-2">
                                                                                            <div>Graphic Design</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>Fri, Jun 12, 2020</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>5:38 am</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>7:17 am</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-18-75">
                                                                                        <div className="td-2">
                                                                                            <div>1:38:46 $</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-409"><a href="timesheet.html" className="btn-link-style1">View daily timesheet<span className="hubstaff-icon"></span></a></div>
                                                            </div>
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">PROJECTS</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="9abbdb73-2bf6-7db7-0b0f-c3a4205431ad" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="div-block-403 overflow-auto">
                                                                        <div className="table-activity-style-1">
                                                                            <div className="thead-2 no-bordeer justify-spacebetween">
                                                                                <div className="_6-column _1st-row _w-25">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1">Project</h4>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_6-column _2nd-row _w-25">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1"><strong>Time</strong></h4>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tbody">
                                                                                <div className="tb-data-row no-side-border dashboard last spacebetween">
                                                                                    <div className="_6-column _1st-row _w-30">
                                                                                        <div className="div-block-402">G</div>
                                                                                        <div className="td-2">
                                                                                            <div>Graphic Design</div>
                                                                                        </div>
                                                                                        <div className="div-block-411">
                                                                                            <div className="badge-pill-style-1 green">
                                                                                                <div>87%</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-25">
                                                                                        <div className="td-2 horizontal">
                                                                                            <div>36:38:10</div>
                                                                                            <div className="div-block-412"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-409"><a href="reports/time-and-activities.html" className="btn-link-style1">View report<span className="hubstaff-icon"></span></a></div>
                                                            </div>
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">APPS &amp; URLS</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="1682018e-c256-a697-22d0-da68d3994894" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-413">
                                                                    <div className="div-block-414"><img src="images/stopwatch-premium-e6a136416ce4ced6807f58787a39025c3a738376c5267d8a79337bdb7a0a790d.svg" alt="" /></div>
                                                                    <div className="div-block-415">
                                                                        <h5 className="h5-display-2">Track applications &amp; websites</h5>
                                                                        <p className="p-style-3 text-center">A premium plan is required to view apps &amp; websites<br />Ask the owner to enable it for you.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active">
                                                <div>
                                                    <div className="div-block-540">
                                                        <div className="div-block-541">
                                                            <div className="w-form">
                                                                <form id="email-form-8" name="email-form-8" data-name="Email Form 8">
                                                                    <div className="div-block-542">
                                                                        <div className="form-row">
                                                                            <div className="input-group-style-2 shadow-style-1 fix-width noline">
                                                                                <div className="input-item-style-2"><em className="italic-text"></em></div>
                                                                                <input type="text" className="form-control-2 rounded-right w-input" maxLength="256" name="Search-projects" data-name="Search Projects" placeholder="Search countries, states or cities" id="Search-projects" required="" /></div>
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
                                                            <div className="div-block-547">
                                                                <div className="div-block-543"><a href="#" className="whitebutton w-button">Map</a><a href="#" className="whitebutton w-button">Satellite</a></div>
                                                                <div className="div-block-548"><a data-w-id="e8073000-5f2b-d1dd-7904-c87a2527ec87" href="#" className="btn-icon2 fixed w-button"></a>
                                                                    <div className="map-plus-modal">
                                                                        <a href="#" className="link-block-11 w-inline-block">
                                                                            <div className="div-block-549">
                                                                                <div></div>
                                                                            </div>
                                                                            <div>Invite Members</div>
                                                                        </a>
                                                                        <a href="#" className="link-block-11 w-inline-block">
                                                                            <div className="div-block-549">
                                                                                <div></div>
                                                                            </div>
                                                                            <div>Add a job site</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-541 align-end">
                                                            <div className="div-block-544"><a href="#" className="whitebutton icon w-button"></a><a href="#" className="whitebutton icon w-button"></a></div>
                                                            <div className="div-block-545">
                                                                <div className="div-block-546">
                                                                    <div className="h6-display-1-2">ACTIVE WORKERS</div>
                                                                    <h3 className="heading-7">0</h3><a href="reports/time-and-activities.html" className="btn-link-style1">View <span className="hubstaff-icon"></span></a></div>
                                                                <div className="div-block-546">
                                                                    <div className="h6-display-1-2">ACTIVE JOBSITES</div>
                                                                    <h3 className="heading-7">0</h3><a href="reports/time-and-activities.html" className="btn-link-style1">View <span className="hubstaff-icon"></span></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="div-block-393">
                                                        <div className="div-block-394">
                                                            <div className="div-block-395">
                                                                <div className="h6-display-1-2">WEEKLY ACTIVITY <span className="hubstaff-icon"></span></div>
                                                                <div className="small-menu">
                                                                    <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f7086" className="div-block-397">
                                                                        <div></div>
                                                                    </div>
                                                                    <div className="small-menu-option">
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Activity Setting</div>
                                                                        </a>
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Screenshot Frequency</div>
                                                                        </a>
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Remove</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-398">
                                                                <div className="div-block-399">
                                                                    <h4 className="h4-display-2">53%</h4>
                                                                    <div className="p-style-5 text-green"><span className="material-icon-font"></span>  1%</div>
                                                                </div>
                                                                <div className="div-block-400">
                                                                    <div className="div-block-401"><img src="images/Dashboard-01_1Dashboard-01.jpg" alt="" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-394">
                                                            <div className="div-block-395">
                                                                <div className="h6-display-1-2">WORKED THIS WEEK</div>
                                                                <div className="small-menu">
                                                                    <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f709d" className="div-block-397">
                                                                        <div></div>
                                                                    </div>
                                                                    <div className="small-menu-option">
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Remove</div>
                                                                        </a>
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Add time</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-398">
                                                                <div className="div-block-399">
                                                                    <h4 className="h4-display-2">239:37:49</h4>
                                                                    <div className="p-style-5 text-red"><span className="material-icon-font"></span> 14:01:13</div>
                                                                </div>
                                                                <div className="div-block-400">
                                                                    <div className="div-block-401"><img src="images/Dashboard-02_1Dashboard-02.jpg" alt="" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-394">
                                                            <div className="div-block-395">
                                                                <div className="h6-display-1-2">SPENT THIS WEEK <span className="hubstaff-icon"></span></div>
                                                                <div className="small-menu">
                                                                    <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f70b6" className="div-block-397">
                                                                        <div></div>
                                                                    </div>
                                                                    <div className="small-menu-option">
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Remove</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-398">
                                                                <div className="div-block-399">
                                                                    <h4 className="h4-display-2">-</h4>
                                                                    <div className="p-style-5">--</div>
                                                                </div>
                                                                <div className="div-block-400">
                                                                    <div className="div-block-401"><img src="images/Dashboard-03_1Dashboard-03.jpg" alt="" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-394 border-right-0">
                                                            <div className="div-block-395">
                                                                <div className="h6-display-1-2">PROJECTS WORKED</div>
                                                                <div className="small-menu">
                                                                    <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f70cb" className="div-block-397">
                                                                        <div></div>
                                                                    </div>
                                                                    <div className="small-menu-option">
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Manage projects</div>
                                                                        </a>
                                                                        <a href="#" className="side-submenu-link-option w-inline-block">
                                                                            <div>Remove</div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-398">
                                                                <div className="div-block-399">
                                                                    <h4 className="h4-display-2">2</h4>
                                                                    <div className="p-style-5">--</div>
                                                                </div>
                                                                <div className="div-block-400">
                                                                    <div className="div-block-401"><img src="images/Dashboard-04_1Dashboard-04.jpg" alt="" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="_2-column-cards">
                                                        <div className="div-block-410">
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">RECENT ACTIVITY</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f70e2" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Activity Setting</div>
                                                                            </a>
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Screenshot frequency</div>
                                                                            </a>
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-550">
                                                                    <div className="div-block-551">
                                                                        <div className="div-block-552">
                                                                            <div className="div-block-553"><img src="images/default_speck-ab4a84406b7db77dc05ecef182d9a5879abff96e6bdaf7fd12713d5c2a06b36c_1default_speck-ab4a84406b7db77dc05ecef182d9a5879abff96e6bdaf7fd12713d5c2a06b36c.png" alt="" /></div>
                                                                            <div>Sarah Hart</div>
                                                                        </div><a href="activity.html" className="btn-link-style1">View all <span className="hubstaff-icon"></span></a></div>
                                                                </div>
                                                                <div className="div-block-406">
                                                                    <div data-w-id="e6426d48-9a1a-96e2-a95f-75a8ccaffda7" className="screenshot-wrapper"><img src="images/SS_01.png" srcSet="images/SS_01-p-500.png 500w, images/SS_01-p-800.png 800w, images/SS_01.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>72%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-w-id="e6426d48-9a1a-96e2-a95f-75a8ccaffdb6" className="screenshot-wrapper"><img src="images/SS_02.png" srcSet="images/SS_02-p-500.png 500w, images/SS_02-p-800.png 800w, images/SS_02-p-1080.png 1080w, images/SS_02.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>80%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-w-id="e6426d48-9a1a-96e2-a95f-75a8ccaffdc5" className="screenshot-wrapper"><img src="images/SS_03.png" srcSet="images/SS_03-p-500.png 500w, images/SS_03-p-800.png 800w, images/SS_03-p-1080.png 1080w, images/SS_03-p-1600.png 1600w, images/SS_03.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>65%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-550">
                                                                    <div className="div-block-551">
                                                                        <div className="div-block-552">
                                                                            <div className="div-block-553"><img src="images/default_speck-ab4a84406b7db77dc05ecef182d9a5879abff96e6bdaf7fd12713d5c2a06b36c_1default_speck-ab4a84406b7db77dc05ecef182d9a5879abff96e6bdaf7fd12713d5c2a06b36c.png" alt="" /></div>
                                                                            <div>Luke Castellan</div>
                                                                        </div><a href="activity.html" className="btn-link-style1">View all <span className="hubstaff-icon"></span></a></div>
                                                                </div>
                                                                <div className="div-block-406">
                                                                    <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f7117" className="screenshot-wrapper"><img src="images/SS_06.png" srcSet="images/SS_06-p-500.png 500w, images/SS_06-p-800.png 800w, images/SS_06-p-1080.png 1080w, images/SS_06-p-1600.png 1600w, images/SS_06.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>87%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f7126" className="screenshot-wrapper"><img src="images/SS_05.png" srcSet="images/SS_05-p-500.png 500w, images/SS_05-p-800.png 800w, images/SS_05.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>75%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f7135" className="screenshot-wrapper"><img src="images/SS_04.png" srcSet="images/SS_04-p-500.png 500w, images/SS_04-p-800.png 800w, images/SS_04.png 1919w" sizes="(max-width: 479px) 12.859375px, (max-width: 767px) 8vw, (max-width: 991px) 9vw, 15vw" alt="" />
                                                                        <div className="screenshot-option">
                                                                            <div className="div-block-488">
                                                                                <div className="lightbox-button"><a href="#" className="lightbox-link w-inline-block w-lightbox">

                                                                                </a>
                                                                                    <div>View Screen</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="div-block-407">
                                                                                <div className="p-style-5 text-center text-white-and-smaller">Fri, Jun 12, 2020 6:20 am</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="div-block-408">
                                                                            <div className="badge-pill-style-1 green">
                                                                                <div>73%</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">MEMBERS</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f714e" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Invite members</div>
                                                                            </a>
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Manage members</div>
                                                                            </a>
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="div-block-403 overflow-auto">
                                                                        <div className="table-activity-style-1">
                                                                            <div className="thead-2 no-bordeer justify-spacebetween">
                                                                                <div className="_6-column _1st-row _w-60">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1">Project</h4>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_6-column _2nd-row _w-20">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1"><strong>Today</strong></h4>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_6-column _2nd-row _w-20">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1"><strong>This week</strong></h4>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tbody">
                                                                                <div className="tb-data-row no-side-border members">
                                                                                    <div className="_6-column _1st-row _w-60">
                                                                                        <div className="div-block-402 nobgcolor"><img src="images/default_speck-ab4a84406b7db77dc05ecef182d9a5879abff96e6bdaf7fd12713d5c2a06b36c_1default_speck-ab4a84406b7db77dc05ecef182d9a5879abff96e6bdaf7fd12713d5c2a06b36c.png" alt="" /></div>
                                                                                        <div className="td-2">
                                                                                            <div className="div-block-554">
                                                                                                <div className="p-style-3 font-weight-bold">Sarah Hart</div>
                                                                                                <div className="p-style-3">Graphic Designer</div>
                                                                                                <div className="p-style-5">No task</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-20">
                                                                                        <div className="td-2 horizontal">
                                                                                            <div className="div-block-555">
                                                                                                <div className="badge-pill-style-1 green">
                                                                                                    <div>87%</div>
                                                                                                </div>
                                                                                                <div>1:13</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-20">
                                                                                        <div className="td-2 horizontal">
                                                                                            <div className="div-block-556">
                                                                                                <div className="div-block-555">
                                                                                                    <div className="badge-pill-style-1 green">
                                                                                                        <div>65%</div>
                                                                                                    </div>
                                                                                                    <div>16:05</div>
                                                                                                </div>
                                                                                                <div><img src="images/members-worked.png" alt="" /></div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">TO-DOS</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="b63fdd63-f617-fc19-9c0c-37e19fba7cbc" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="div-block-403 overflow-auto">
                                                                        <div className="table-activity-style-1">
                                                                            <div className="thead-2 no-bordeer justify-spacebetween">
                                                                                <div className="_6-column _1st-row _w-25">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1">To-do</h4>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_6-column _2nd-row _w-25">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1"><strong>Time</strong></h4>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tbody">
                                                                                <div className="tb-data-row no-side-border dashboard last spacebetween">
                                                                                    <div className="_6-column _1st-row _w-30">
                                                                                        <div className="div-block-402">G</div>
                                                                                        <div className="td-2">
                                                                                            <div>Graphic Design</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-25">
                                                                                        <div className="td-2 horizontal">
                                                                                            <div>36:38:10</div>
                                                                                            <div className="div-block-412"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tbody">
                                                                                <div className="tb-data-row no-side-border dashboard last spacebetween">
                                                                                    <div className="_6-column _1st-row _w-30">
                                                                                        <div className="div-block-402">C</div>
                                                                                        <div className="td-2">
                                                                                            <div>Customer Service</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-25">
                                                                                        <div className="td-2 horizontal">
                                                                                            <div>29:42:18</div>
                                                                                            <div className="div-block-412"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-409"><a href="reports/time-and-activities.html" className="btn-link-style1">View report<span className="hubstaff-icon"></span></a></div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-410">
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">PROJECTS</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f7201" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Manage projects</div>
                                                                            </a>
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="div-block-403 overflow-auto">
                                                                        <div className="table-activity-style-1">
                                                                            <div className="thead-2 no-bordeer justify-spacebetween">
                                                                                <div className="_6-column _1st-row _w-25">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1">Project</h4>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="_6-column _2nd-row _w-25">
                                                                                    <div className="th">
                                                                                        <h4 className="tb-heading-style1"><strong>Time</strong></h4>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tbody">
                                                                                <div className="tb-data-row no-side-border dashboard last spacebetween">
                                                                                    <div className="_6-column _1st-row _w-30">
                                                                                        <div className="div-block-402">G</div>
                                                                                        <div className="td-2">
                                                                                            <div>Graphic Design</div>
                                                                                        </div>
                                                                                        <div className="div-block-411">
                                                                                            <div className="badge-pill-style-1 green">
                                                                                                <div>87%</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-25">
                                                                                        <div className="td-2 horizontal">
                                                                                            <div>36:38:10</div>
                                                                                            <div className="div-block-412"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="tbody">
                                                                                <div className="tb-data-row no-side-border dashboard last spacebetween">
                                                                                    <div className="_6-column _1st-row _w-30">
                                                                                        <div className="div-block-402">C</div>
                                                                                        <div className="td-2">
                                                                                            <div>Customer Service</div>
                                                                                        </div>
                                                                                        <div className="div-block-411">
                                                                                            <div className="badge-pill-style-1 green">
                                                                                                <div>74%</div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="_6-column _2nd-row _w-25">
                                                                                        <div className="td-2 horizontal">
                                                                                            <div>29:42:18</div>
                                                                                            <div className="div-block-412"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-409"><a href="reports/time-and-activities.html" className="btn-link-style1">View report<span className="hubstaff-icon"></span></a></div>
                                                            </div>
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">PROJECT BUDGETS</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="e3de2066-7236-33e1-b435-0f316f1f7230" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-413">
                                                                    <div className="div-block-414"><img src="images/stopwatch-premium-e6a136416ce4ced6807f58787a39025c3a738376c5267d8a79337bdb7a0a790d.svg" alt="" /></div>
                                                                    <div className="div-block-415">
                                                                        <h5 className="h5-display-2">Set budgets for your projects</h5>
                                                                        <p className="p-style-3 text-center">A premium plan is required to set budgets for your projects<br />Ask the owner to enable it for you.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="div-block-405">
                                                                <div className="div-block-395">
                                                                    <h5 className="h5-display-2">APPS &amp; URLS</h5>
                                                                    <div className="small-menu">
                                                                        <div data-w-id="f50a549f-2d72-e246-12bc-081c7faa5f09" className="div-block-397">
                                                                            <div></div>
                                                                        </div>
                                                                        <div className="small-menu-option">
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Apps &amp; URLs settings</div>
                                                                            </a>
                                                                            <a href="#" className="side-submenu-link-option w-inline-block">
                                                                                <div>Remove</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-413">
                                                                    <div className="div-block-414"><img src="images/stopwatch-premium-e6a136416ce4ced6807f58787a39025c3a738376c5267d8a79337bdb7a0a790d.svg" alt="" /></div>
                                                                    <div className="div-block-415">
                                                                        <h5 className="h5-display-2">Track applications &amp; websites</h5>
                                                                        <p className="p-style-3 text-center">A premium plan is required to view apps &amp; websites<br />Ask the owner to enable it for you.</p>
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
                            </div>
                        </div>

                    </div>

                    <PopupSupport/>
               </div>
            </div>
        );
    }
}
