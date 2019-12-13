import React, { Component } from 'react'
import './ChangePage.scss'

class ChangePage extends Component{
    changePage = () => {
        if(typeof this.props.fnClick == 'function'){
            this.props.fnClick(this.props.side)
        }
    }
    render(){
        const { text, side }= this.props;
        return(
            <div className="changePageComp" >
                {
                    side == 'left'
                    ? <i className="fas fa-arrow-left" onClick={this.changePage}></i>
                    : null
                }
                {text.toUpperCase()}
                {
                    side == 'right'
                    ? <i className="fas fa-arrow-right" onClick={this.changePage}></i>
                    : null
                }
            </div>
        )
    }
}

export default ChangePage