import React, { Component } from 'react'
import './City.scss';
import styled from 'styled-components';

class City extends Component{
    constructor(){
        super();
        this.state = {
            textBtn: 'download itinerary' 
        }
    }
    render(){
        const { textBtn } = this.state;
        const { city, img,color } = this.props;
        const CityElement = styled.div`
        background-image: url(${img});
        background-size: cover;
        background-repeat: no-repeat;
    `
        return(
            <CityElement className="cityComp">
                <p className="cityName">
                    {city}
                </p>
                <button className="btnDownload" style={{backgroundColor: color, border: `1px solid ${color}`}}>
                    {textBtn}
                </button>
            </CityElement>
        )
    }
}

export default City