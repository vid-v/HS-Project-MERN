import React, { Component } from "react";

class SideBar extends Component {
    render() {
        return (
                <div className="side-nav-container">
                    <div className="sidenav-top-menu-container">
                        <div className="side-menu-wrap">
                            <a href="index.html" aria-current="page" className="side-menu-text-contents w-inline-block w--current">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Dashboard</div>
                            </a>
                            <a title="Dashboard" href="index.html" aria-current="page" className="side-menu-icon-only-menu w-inline-block w--current">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="activity.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Activity</div>
                            </a>
                            <a data-w-id="225efe45-e91b-7fb8-dc75-1c922fcf3c36" href="#" className="side-menu-arrow w-inline-block">
                                <div className="text-block-16"></div>
                            </a>
                            <a title="Activity" href="activity.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="activity-submenu">
                            <a href="activity.html" className="submenu w-inline-block">
                                <div>Screenshots</div>
                            </a>
                            <a href="activity/apps.html" className="submenu w-inline-block">
                                <div>Apps</div>
                            </a>
                            <a href="activity/urls.html" className="submenu w-inline-block">
                                <div>URLs</div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="map.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Map</div>
                            </a>
                            <a title="Map" href="map.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="timesheet.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Timesheets</div>
                            </a>
                            <a data-w-id="225efe45-e91b-7fb8-dc75-1c922fcf3c59" href="#" className="side-menu-arrow w-inline-block">
                                <div className="text-block-16"></div>
                            </a>
                            <a title="Timesheets" href="timesheet.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="timesheets-submenu">
                            <a href="timesheet.html" className="submenu w-inline-block">
                                <div>View &amp; edit</div>
                            </a>
                            <a href="timesheet/approvals.html" className="submenu w-inline-block">
                                <div>Approvals</div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="reports.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Reports</div>
                            </a>
                            <a data-w-id="225efe45-e91b-7fb8-dc75-1c922fcf3c6e" href="#" className="side-menu-arrow w-inline-block">
                                <div className="text-block-16"></div>
                            </a>
                            <a title="Reports" href="reports.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="reports-submenu">
                            <a href="reports/time-and-activities.html" className="submenu w-inline-block">
                                <div>Time &amp; activity</div>
                            </a>
                            <a href="reports/weekly.html" className="submenu w-inline-block">
                                <div>Weekly</div>
                            </a>
                            <a href="reports/amounts-owed.html" className="submenu w-inline-block">
                                <div>Amounts owed</div>
                            </a>
                            <a href="reports/payment.html" className="submenu w-inline-block">
                                <div>Payments</div>
                            </a>
                            <a href="reports/apps-urls.html" className="submenu w-inline-block">
                                <div>Apps &amp; URLs</div>
                            </a>
                            <a href="reports/manual-time-edits.html" className="submenu w-inline-block">
                                <div>Manual time edits</div>
                            </a>
                            <a href="reports/timesheet-approvals.html" className="submenu w-inline-block">
                                <div>Timesheet approvals</div>
                            </a>
                            <a href="reports/expenses.html" className="submenu w-inline-block">
                                <div>Expenses</div>
                            </a>
                            <a href="reports/weekly-limits.html" className="submenu w-inline-block">
                                <div>Weekly limits</div>
                            </a>
                            <a href="reports/daily-limits.html" className="submenu w-inline-block">
                                <div>Daily limits</div>
                            </a>
                            <a href="reports/project-budgets.html" className="submenu w-inline-block">
                                <div>Project budgets</div>
                            </a>
                            <a href="reports/time-off-balances.html" className="submenu w-inline-block">
                                <div>Time off balances</div>
                            </a>
                            <a href="reports/time-off-transactions.html" className="submenu w-inline-block">
                                <div>Time off transactions</div>
                            </a>
                            <a href="reports/client-invoices.html" className="submenu w-inline-block">
                                <div>Client invoices</div>
                            </a>
                            <a href="reports/team-invoices.html" className="submenu w-inline-block">
                                <div>Team invoices</div>
                            </a>
                            <a href="reports/client-invoices-aging.html" className="submenu w-inline-block">
                                <div>Client invoices aging</div>
                            </a>
                            <a href="reports/team-invoices-aging.html" className="submenu w-inline-block">
                                <div>Team invoices aging</div>
                            </a>
                            <a href="reports/attendance.html" className="submenu w-inline-block">
                                <div>Attendance</div>
                            </a>
                            <a href="reports/job-sites.html" className="submenu w-inline-block">
                                <div>Visits</div>
                            </a>
                            <a href="reports.html" className="submenu w-inline-block">
                                <div>All reports</div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="to-dos.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>To-dos</div>
                            </a>
                            <a title="To-dos" href="to-dos.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="invoices.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Invoices</div>
                            </a>
                            <a title="Invoices" href="invoices.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="schedules.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Schedules</div>
                            </a>
                            <a title="Schedules" href="schedules.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="time-off.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Time off</div>
                            </a>
                            <a title="Time off" href="time-off.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="expenses.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Expenses <span className="text-span">BETA</span></div>
                            </a>
                            <a title="Expenses" href="expenses.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="div-block-361">
                            <div className="label-default">
                                <div className="h6-display-1-2 opacity-50">ADMIN</div>
                            </div>
                            <div className="label-shrink">
                                <div className="h6-display-1-2 opacity-50">ADMIN</div>
                            </div>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="projects.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Projects</div>
                            </a>
                            <a title="Projects" href="projects.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="members.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Members</div>
                            </a>
                            <a title="Members" href="members.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="teams.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Teams</div>
                            </a>
                            <a title="Teams" href="teams.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="job-sites-beta.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Job sites <span className="text-span">BETA</span></div>
                            </a>
                            <a title="Job sites" href="job-sites-beta.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="clients.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Clients</div>
                            </a>
                            <a title="Clients" href="clients.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="integrations.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Integrations</div>
                            </a>
                            <a title="Integrations" href="integrations.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="payments-3.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Payments</div>
                            </a>
                            <a data-w-id="225efe45-e91b-7fb8-dc75-1c922fcf3d3d" href="#" className="side-menu-arrow w-inline-block">
                                <div className="text-block-16"></div>
                            </a>
                            <a title="Payments" href="payments-3.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="payments-submenu">
                            <a href="payments-3.html" className="submenu w-inline-block">
                                <div>Send</div>
                            </a>
                            <a href="payments-2/payroll.html" className="submenu w-inline-block">
                                <div>Payroll</div>
                            </a>
                            <a href="payments-2/past-payments.html" className="submenu w-inline-block">
                                <div>Past</div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="settings.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Settings</div>
                            </a>
                            <a data-w-id="225efe45-e91b-7fb8-dc75-1c922fcf3d55" href="#" className="side-menu-arrow w-inline-block">
                                <div className="text-block-16"></div>
                            </a>
                            <a title="Settings" href="settings.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="settings-submenu">
                            <a href="settings-2/general.html" className="submenu w-inline-block">
                                <div>General</div>
                            </a>
                            <a href="settings-2/features.html" className="submenu w-inline-block">
                                <div>Features</div>
                            </a>
                            <a href="settings-2/billing.html" className="submenu w-inline-block">
                                <div>Billing</div>
                            </a>
                        </div>
                        <div className="side-menu-wrap">
                            <a href="more-features.html" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>More Features</div>
                            </a>
                            <a title="More Features" href="more-features.html" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                        <div className="side-menu-wrap invite">
                            <a data-w-id="225efe45-e91b-7fb8-dc75-1c922fcf3d72" href="#" className="side-menu-text-contents w-inline-block">
                                <div className="icon-wrap invite">
                                    <div className="text-block-15"></div>
                                </div>
                                <div>Invite members</div>
                            </a>
                            <a title="Teams" data-w-id="225efe45-e91b-7fb8-dc75-1c922fcf3d78" href="#" className="side-menu-icon-only-menu w-inline-block">
                                <div className="icon-wrap invite">
                                    <div className="text-block-15"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="sidenav-bottom-container">
                        <div data-w-id="225efe45-e91b-7fb8-dc75-1c922fcf3d7d" className="div-block-362">
                            <div className="div-block-363">
                                <div className="div-block-364">


                                    <img src="images/default_speck-ab4a84406b7db77dc05ecef182d9a5879abff96e6bdaf7fd12713d5c2a06b36c_1default_speck-ab4a84406b7db77dc05ecef182d9a5879abff96e6bdaf7fd12713d5c2a06b36c.png" alt="" />
                                </div>
                                <div className="username">
                                    <div className="p-style-3 text-violet">John Smith</div>
                                </div>
                            </div>
                            <div className="div-block-365">
                                <div></div>
                            </div>
                        </div>
                        <div className="bottom-sidenav-option">
                            <a href="#" className="side-submenu-link-option w-inline-block">
                                <div>My Accounts</div>
                            </a>
                            <a href="user/user-setting-billing.html" className="side-submenu-link-option w-inline-block">
                                <div>User settings &amp; billing</div>
                            </a>
                            <div className="submenu-divider"></div>
                            <a href="#" className="side-submenu-link-option w-inline-block">
                                <div>Payment accounts</div>
                            </a>
                            <a href="#" className="side-submenu-link-option w-inline-block">
                                <div>Integrations</div>
                            </a>
                            <div className="submenu-divider"></div>
                            <a href="#" className="side-submenu-link-option w-inline-block">
                                <div>Support</div>
                            </a>
                            <a href="user/download.html" className="side-submenu-link-option w-inline-block">
                                <div>Download</div>
                            </a>
                            <a href="#" className="side-submenu-link-option w-inline-block">
                                <div>Developer AI</div>
                            </a>
                            <div className="submenu-divider"></div>
                            <a href="#" className="side-submenu-link-option w-inline-block">
                                <div>Sign Out</div>
                            </a>
                        </div>
                    </div>
                    <div className="invite-members-modal">
                        <div className="modal">
                            <div className="modal-style-1">
                                <div className="modal-content">
                                    <div className="modal-header-2">
                                        <h3 className="h3-display-1 font-weight-medium">Invite Member</h3>
                                        <div data-w-id="bf39c1fe-fd9b-bc92-a0bd-79a0e7d8d934" className="close-2"></div>
                                    </div>
                                    <div className="modal-body-2">
                                        <div className="w-form">
                                            <form id="email-form-6" name="email-form-6" data-name="Email Form 6">
                                                <div>
                                                    <div className="form-row">
                                                        <div className="div-block-536">
                                                            <h5 className="h6-display-1 no-margin">EMAIL*</h5>
                                                            <a href="#" className="btn-link-style1 no-rightmargin">Copy Invite Link</a></div>
                                                        <div className="form-input-style-1">
                                                            <textarea placeholder="Enter email addresses separated by new lines." maxLength="5000" id="field-4" name="field-4" className="form-control-2 w-input"></textarea></div>
                                                    </div>
                                                    <div>
                                                        <div><label className="w-checkbox checkbox-field-3"><input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" className="w-checkbox-input" /><span className="checkbox-label-4 w-form-label">Invite to </span><div className="div-block-537">

                                                            <img src="images/hubstaff-tasks.svg" alt="" /></div></label></div>
                                                    </div>
                                                    <div className="form-row margin-bottom">
                                                        <div className="div-block-536">
                                                            <h5 className="h6-display-1 no-margin">ROLE*</h5><a href="#" className="btn-link-style1 no-rightmargin">Learn more</a></div>
                                                        <div data-hover="" data-delay="0" className="dropdown-style1 stretch w-dropdown">
                                                            <div className="dropdown-toggle-2 stretch w-dropdown-toggle">
                                                                <div className="w-icon-dropdown-toggle"></div>
                                                                <div>User</div>
                                                            </div>
                                                            <nav className="dropdown-list-4 w-dropdown-list">
                                                                <div className="multiline-menu">
                                                                    <div>Organization Manager</div>
                                                                    <div className="text-block-30">Can do everything, except view and manage financials</div>
                                                                </div>
                                                                <div className="multiline-menu">
                                                                    <div>Project manager</div>
                                                                    <div className="text-block-30">Can manage, track, and view reports for any projects they&#x27;re added to</div>
                                                                </div>
                                                                <div className="multiline-menu highlight-link">
                                                                    <div>User</div>
                                                                    <div className="text-block-30">Can track and view their time for any project they&#x27;re added to</div>
                                                                </div>
                                                                <div className="multiline-menu">
                                                                    <div>Project viewer</div>
                                                                    <div className="text-block-30">Can view reports for any project they&#x27;re added to (viewers are free)</div>
                                                                </div>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                    <div className="form-row margin-bottom">
                                                        <div className="div-block-536">
                                                            <h5 className="h6-display-1 no-margin">PROJECTS</h5><a href="#" className="btn-link-style1 no-rightmargin">Select all</a></div>
                                                        <div data-hover="" data-delay="0" className="dropdown-style1 stretch w-dropdown">
                                                            <div className="dropdown-toggle-2 stretch w-dropdown-toggle">
                                                                <div>Select projects you want to add team members to</div>
                                                            </div>
                                                            <nav className="dropdown-list-4 w-dropdown-list">
                                                                <div className="div-block-539">
                                                                    <div className="form-input-style-1">
                                                                        <input type="text" className="form-control w-input" maxLength="256" name="Default-Size-4" data-name="Default Size 4" id="Default-Size-4" required="" />
                                                                    </div>
                                                                </div>
                                                                <div className="div-block-459 left-padding-20">
                                                                    <div className="p-style-5">Projects</div>
                                                                </div><a href="#" className="dropdown-link-2 w-dropdown-link">Customer Service</a><a href="#" className="dropdown-link-2 w-dropdown-link">Graphic Design</a></nav>
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
                                    <div className="modal-footer"><a href="#" className="btn-style1 right-margin-10px w-button">Send</a><a data-w-id="bf39c1fe-fd9b-bc92-a0bd-79a0e7d8d95d" href="#" className="btn-style1 bg-white w-button">Cancel</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default SideBar;
