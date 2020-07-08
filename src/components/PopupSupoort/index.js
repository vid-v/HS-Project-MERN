import React, { Component } from "react";

class PopupSupport extends Component {
    render() {
        return (
            <div className="hubstaff-support-popup">
                <div className="support-window">
                    <div className="support-window-header">
                        <h4 className="h5-display-1 font-weight-semibold white">Hubstaff Support</h4>
                        <div data-w-id="8c1024bb-18f9-7cbb-76f8-b4fd087c6951" className="close-2 white"></div>
                    </div>
                    <div className="support-window-content">
                        <div className="form-block-9 w-form">
                            <form id="email-form-7" name="email-form-7" data-name="Email Form 7" className="form-7">
                                <div className="div-block-527">
                                    <div className="form-row"><label className="label-style-1"><strong>Name</strong></label>
                                        <div className="form-input-style-1-2"><input type="text" className="form-control-3 w-input" maxLength="256" name="Default-Size-3" data-name="Default Size 3" placeholder="FirstName LastName" id="Default-Size-3" /></div>
                                    </div>
                                    <div className="form-row"><label className="label-style-1"><strong>Email</strong></label>
                                        <div className="form-input-style-1-2"><input type="text" className="form-control-3 w-input" maxLength="256" name="Default-Size-2" data-name="Default Size 2" placeholder="yourname@email.com" id="Default-Size-2" /></div>
                                    </div>
                                    <div className="form-row"><label className="label-style-1"><strong>How can we help you?</strong></label>
                                        <div className="text-area-style-1 hubstaff-support"><textarea data-name="text area style-1" maxLength="5000" id="text-area-style" name="text-area-style-1" className="form-control-textarea style-1 w-input"></textarea></div>
                                    </div>
                                    <div className="form-row"><label className="label-style-1"><strong>Attachments</strong></label>
                                        <div className="attachment-div">
                                            <h4 className="h6-display-1 font-weight-normal font-gray"><span className="material-icon-font attach"></span> Add up to 5 files</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="hubstaff-support-footer">
                                    <a data-w-id="8c1024bb-18f9-7cbb-76f8-b4fd087c6973" href="#" className="btn-style1 w-button">Send</a>
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
                <div className="support-window-message-sent">
                    <div className="support-window-header">
                        <h4 className="h5-display-1 font-weight-semibold white">Message sent</h4>
                        <div data-w-id="8c1024bb-18f9-7cbb-76f8-b4fd087c697f" className="close-2 white"></div>
                    </div>
                    <div className="support-window-content">
                        <div className="div-block-464">
                            <div className="div-block-526">

                                <img src="https://uploads-ssl.webflow.com/5ee24d62da998018955cac86/5eebc125fc7941ffcb376b86_message%20sent-01.svg" alt="" /></div>
                            <h4 className="h5-display-1 font-weight-semibold">Thanks for reaching out</h4>
                            <div>Someone will get back to you soon</div>
                            <div className="div-block-150"><a data-w-id="8c1024bb-18f9-7cbb-76f8-b4fd087c698a" href="#" className="btn-link-style1">Go Back</a></div>
                        </div>
                    </div>
                </div>
                <div data-w-id="8c1024bb-18f9-7cbb-76f8-b4fd087c698c" className="support-pop-up-button">

                    <img src="https://uploads-ssl.webflow.com/5ee24d62da998018955cac86/5eebc7968593ff76160b341b_question.svg" alt="" className="support-icon" /></div>
            </div>
        );
    }
}
export default PopupSupport;