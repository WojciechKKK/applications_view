import React, { Component } from 'react'
import './AccountSummary.scss';

class AccountSummary extends Component{
    constructor(){
        super();
        this.state = {
            title: 'your account summary',
            elements: [  //can be modified
                {name: 'Starbucks Coffee', date: '2:30PM, 17-08-2017', color: 'rgb(255,167,38)'},
                {name: 'H&M', date: '1:00PM, 17-08-2017', color: 'rgb(137,74,214)'},
                {name: 'Eye Doctor', date: '6:00PM, 17-08-2017', color: 'rgb(255,73,103)'}
            ]
        }
    }
    render(){
        const { title, elements } = this.state
        return(
            <div className="accountSummaryComp">
                <div className="accountSummaryContainer">
                    <div className="accountSummaryTitle">
                        {title}
                    </div>
                    <div className="accountSummaryBoxes">
                        {
                            elements.map(el => {
                                return <div key={el.name} className="box" style={{backgroundColor: el.color}}>
                                            <div className="boxContainer">
                                                <div className="boxName">{el.name}</div>
                                                <div className="boxDate">{el.date}</div>
                                                <div className="boxArrow">
                                                    <i className="fas fa-arrow-right"></i>
                                                </div>
                                            </div>
                                        </div>
                            })
                        }
                    </div>
              </div>
            </div>
        )
    }
}

export default AccountSummary