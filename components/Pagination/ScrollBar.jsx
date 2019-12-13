import React, { Component } from 'react'
import Page from './Page.jsx'
import ChangePage from './ChangePage.jsx'
import './AllColors.scss'
import './ScrollBar.scss'

class ScrollBar extends Component{
    constructor(){
        super();
        this.state = {
            pages: [1,2,3,4,5,6,7,8,9,10],  // items for view
            leftPage: 'previous',           // text for prev btn
            rightPage: 'next',               // text fot next btn
            choose: 1                        // actually view
        }
    }
    //set a actually page
    setHandlePage = (number) => {
        let finalNumber = Number(number);
        this.setState({
            choose: finalNumber
        })
    }
    //set a actually page for btn prev/next
    setPreviousNext = (side) => {
        let actuallyNum = this.state.choose;
        let chooseNumber = side == 'right' ? actuallyNum + 1 : actuallyNum -1;
        if(chooseNumber == 11){
            chooseNumber = 1
        } else if(chooseNumber == 0){
            chooseNumber = 10
        }
        this.setState({
            choose: chooseNumber
        })
        
    }
    render(){
        const { pages, leftPage, rightPage, choose } = this.state
        return(
            <div className="scrollBarComp">
                <div className="scrollBarContainer">
                    <ChangePage  text={leftPage} side="left" fnClick={this.setPreviousNext}/>
                    <div className="pageComp">
                        {
                            pages.map(el => <Page num={el} key={el} fnClick={this.setHandlePage} choose={choose} />)
                        }
                        ...
                    </div>
                    <ChangePage text={rightPage} side="right" fnClick={this.setPreviousNext}/>
                </div>
            </div>
        )
    }
}

export default ScrollBar