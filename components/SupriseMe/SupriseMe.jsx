import React, { Component } from 'react'
import './SupriseMe.scss'

class SupriseMe extends Component{
    constructor(){
        super();
        this.state = {
            title: 'surprise me today', //title component
            elements: [     //name & color & size = CAN BE MODIFIED
                {name: 'camping', color: 'rgb(121,134,203)', img: <i className="fas fa-campground"></i>, size: 'small' },
                {name: 'eating', color: 'rgb(253,137,102)', img: <i className="fas fa-hamburger"></i>, size: 'small'  },
                {name: 'hiking', color: 'rgb(76,162,255)', img: <i className="fas fa-hiking"></i>, size: 'big'  },
            ]
        }
    }
    render(){
        const { title, elements } = this.state
        return(
            <div className="supriseMeComp">
                 <div className="supriseMeContainer">
                     <h2 className="supriseMeTitle">
                        {title}
                     </h2>
                     <div className="supriseMeElements">
                         {
                             elements.map(el => {
                                 return <div key={el.name} className={`supriseItem ${el.size == 'small' ? 'small' : 'big'}`} style={{backgroundColor: el.color}}>
                                            <div className="supriseInside">{el.img} <br />{el.name}</div>
                                         </div>
                             })
                         }
                     </div>
                 </div>
            </div>
        )
    }
}

export default SupriseMe