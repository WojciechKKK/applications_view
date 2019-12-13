import React, { Component } from 'react'
import './TodaySchedule.scss';
import data from './data.json';

class TodaySchedule extends Component{
    constructor(){
        super();
        this.state = {
            title: 'Good morning, ',
            restOfTitle: 'this is your schedule looks like  today!'
        }
    }
    render(){
        const { name } = this.props;
        const { title, restOfTitle }= this.state
        return(
            <div className="todayScheduleComp">
                <div className="scheduleContainer">
                    <section className="scheduleHeader">
                        <div className="scheduleText">
                            <h2 className="scheduleTextTitle">
                                {title}
                                <i className="textBig">{name}</i>
                            </h2>
                            <p className="textBig">
                                {restOfTitle}
                            </p>
                        </div>
                        <div className="scheduleLogo">
                            <div className="scheduleLogoMain">
                                <div className="scheduleLogoAdd">+</div>
                            </div>
                        </div>
                    </section>
                    <section className="scheduleBody">
                        {
                            data.elements.map((el,i) => {
                                return <div key={el.color} className={`scheduleElement scheduleElement${i+1}`} style={{backgroundColor: el.color}}>{el.text}
                                            <i className="scheduleElementTime">{el.time}</i>
                                        </div>
                            })
                        }
                    </section>
                </div>
            </div>
        )
    }
}
export default  TodaySchedule