import React, { Component } from 'react'
import './ThingsToDo.scss';

// import coffee from './coffee.jpg';
// import shop from './shop.jpg';
// import music from './music.jpg'

class ThingsToDo extends Component{
    constructor(){
        super();
        this.state = {
            title: 'things to do', //title element
            elements: [ // name & color & sizeClass -> CAN BE MODIFIED
                {name: 'coffee', color: 'rgb(5,156,252)', img: <i className="fas fa-coffee"></i>, size: 'bigSize'},
                {name: 'shop', color: 'rgb(254,168,42)', img: <i className="fas fa-shopping-cart"></i>, size: 'smallSize'},
                {name: 'music', color: 'rgb(107,190,109)', img: <i className="fas fa-music"></i>,  size: 'mediumSize'},
            ]
        }
    }
    // set a gradient for element
    addColor = (color) => {
        const circleStyle = {
            'backgroundColor': color,
            'background': `-webkit-linear-gradient(180deg, #ffffff 0%, ${color} 40%`,
            'background': `linear-gradient(180deg, #ffffff 0%, ${color} 40%)`
        }
        return circleStyle
    }
    render(){
        const { title, elements } = this.state;
        return(
            <div className="thingsToDo">
                <h2 className="toDoTitle">
                    {title}
                </h2>
                <div className="thingsToDoElements">
                    {
                        elements.map((el,key) => {
                            return <div key={key} className={el.size} style={this.addColor(el.color)} >
                                        <div className="toDoElText">{el.img}<br />{el.name}</div>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ThingsToDo