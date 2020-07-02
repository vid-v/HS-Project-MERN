import React, { Component } from "react";

class SelectPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: [
                {
                    name: 'Basic',
                    price: 7,
                    currency: '$',
                    info: 'Starts at $14 and includes 2 users',
                    features: 7
                },
                {
                    name: 'Premium',
                    price: 10,
                    currency: '$',
                    info: 'Starts at $14 and includes 2 users',
                    features: 20
                },
                {
                    name: 'Enterprise',
                    price: 20,
                    currency: '$',
                    info: 'Starts at $14 and includes 2 users',
                    features: 24
                }
            ],
            features: [
                "Time tracking",
                "Activity levels",
                "Unlimited screenshots",
                "Payments",
                "Unlimited integrations",
                "24 hour support",
                "Per user settings",
                "Track apps & URLs",
                "Mobile GPS tracking",
                "Time off & holidays",
                "Scheduling & attendance",
                "Expense tracking",
                "Invoices",
                "Payroll",
                "Client & project budgets",
                "Auto-discard idle time",
                "Timesheet approvals",
                "Daily & weekly limits",
                "Fleet tracking",
                "Unlimited teams",
                "VIP support",
                "Unlimited job sites",
                "Concierge account setup",
                "Higher limits on public API"
            ],
            opacity: 0
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="header">
                        <h3 className="text-center">Choose the plan that's right for your team</h3>
                        <p>You will NOT be billed until your trial expires in 14 days and can cancel at any time</p>


                        {/* <div className="plan-time-span-group">
                            <div className="two-months-free" style={{opacity: this.state.opacity}}>
                                <div className="two-months-free-inner">2 Months Free</div>
                            </div>
                            <div className="plan-time-span-toggle">
                                <div className="btn-group inline-block active" data-toggle="buttons">
                                    <label className="btn btn-default frequency-toggle active" htmlFor="yearly" id="yearly">
                                        <input className="frequency-toggle" name="view" type="radio" />Annual
                                    </label>
                                    <label className="btn btn-default  frequency-toggle" htmlFor="monthly" id="monthly">
                                        <input defaultChecked className="frequency-toggle" name="view" type="radio" />Monthly
                                    </label>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {
                        this.state.plans.map((plan, index) => {
                            return (
                                <div key={index} className={`col-md-4 plan-card ${index === 1 ? 'highlighted' : null}` }>
                                    <div className="">
                                        <h3>{plan.name}</h3>
                                    </div>
                                    <div class="price"><div class="currency">{plan.currency}</div><div class="basic-price">{plan.price}</div><div class="basic-price-cents" style={{"display": "block"}}>83</div><div class="period">/ user / mo</div></div>
                                    <div className="choose-plan-btn">
                                        <a className="btn btn-default">Choose this Plan</a>
                                    </div>
                                    <div>
                                        {this.state.features.map((feature, index)=> {
                                            return (
                                            <p key={index} className={ index >= plan.features ? "not-active" : 'active' }>{feature}</p>
                                            )
                                        })}
                                    </div>
                                    <div className="choose-plan-btn">
                                        <a className="btn btn-default">Choose this Plan</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="plan-footer text-center">
                        <p>Not sure? Start your trial and pick later.</p>
                        <a className="btn btn-default">Pick a plan later</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default SelectPlans;
