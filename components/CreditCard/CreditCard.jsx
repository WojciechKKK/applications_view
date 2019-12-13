import React, { Component } from 'react'
import './CreditCard.scss'

class CreditCard extends Component{
    constructor(){
        super();
        this.state = {
            name: 'John Doe',
            valid: '03/07',
            number: ['1234', '5678', '9012', '3456'] 
        }
    }
    render(){
        const { company, color } = this.props;
        const { name , valid, number } = this.state;
        const styleCredit = {
            'backgroundColor': color
        }
        return(
            <div className="creditCardComp" style={styleCredit}>
                <div className="creditContainer">
                    <h2 className="creditCompany">
                        {company}
                    </h2>
                    <div className="creditNumber">
                        {
                            number.map((el,i) => <i key={i} className="creditNumberEl">{el}</i>)
                        }
                    </div>
                    <div className="creditInfo">
                        <div className="creditName">
                            {name}
                        </div>
                        <div className="creditValid">
                            <div className="creditTextValid">valid <br />thru</div>
                            <div className="creditDateValid">{valid}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreditCard