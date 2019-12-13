import React, { Component } from 'react'
import styled from 'styled-components';
import './Dishes.scss';

class Dishes extends Component{
    constructor(){
        super();
        this.state = {
            btnTitle: 'looks yummy, wants some'
        }
    }
    render(){
        const { title, img, color } = this.props;
        const { btnTitle } = this.state;
        const DishesElement = styled.div`
        background-image: url(${img});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center
    `
        return(
            <div className="dishesComp">
                <DishesElement className="dishesImg">
                </DishesElement>
                <div className="dishesContent">
                    <h2 className="dishesTitle" style={{color: color}}>
                        {title}
                    </h2>
                    <p className="dishesText">
                        {`Crazy ${title}! Are fun and melts in your mouth thing!`}
                    </p>
                    <button className="dishesBtn" style={{backgroundColor: color, border: `1px solid ${color}`}}>
                        {btnTitle[0].toUpperCase() + btnTitle.slice(1,btnTitle.length)}
                    </button>
                </div>
            </div>
        )
    }
}

export default Dishes