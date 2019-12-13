import React, { Component } from "react"
import './Stocks.scss';

class Stocks extends Component{
    constructor(){
        super();
        this.state = {
            title: 'stocks'
        }
    }
    render(){
        const { img } = this.props;
        const { title } = this.state
        return(
            <div className="stocksComp">
                <div className="stockContainer">
                    <div className="stocksInfo">
                        <p className="stocksTitle">{title}</p>
                        <i className="stocksMore">...</i>
                    </div>
                    <img src={img} alt="photo_stocks" className="stocksImg"/>
                </div>
            </div> 
        )
    }
}

export default Stocks