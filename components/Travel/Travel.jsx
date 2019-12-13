import React, { Component } from 'react'
import styled from 'styled-components'
import './Travel.scss'

class Travel extends Component{
    constructor(){
        super();
        this.state = {
            circleEl: [ //colors or img path for circle
                'yellow',
                'orange',
                'red'
            ]
        }
    }
    render(){
        const { name, text, items, img, color } = this.props;
        const { circleEl } = this. state
        const TravelElement = styled.div`
        background-image: url(${img});
        background-size: cover;
        background-repeat: no-repeat;
    `
        return(
            <TravelElement className="travelComp">
                <div className="travelContainer">
                    <div className="travelTitle">
                        {name}
                    </div>
                    <div className="travelInfo">
                        <div className="travelText">
                            { text }
                        </div>
                        <div className="travelCircle">
                            {
                                circleEl.map((el,i) => <div key={el} className="travelCircleEl" style={{top: 100-(25*(i+1)), background: el}}></div>)
                            }
                            <div className="travelCircleCenter" style={{backgroundColor: color}}>
                                +{items}
                            </div>
                        </div>
                    </div>
                </div>
            </TravelElement>             
        )
    }
}

export default Travel