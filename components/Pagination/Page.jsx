import React, {Component} from 'react'
import './Page.scss'

class Page extends Component{
    chooseActiveEl = (e) => {
        if(typeof this.props.fnClick == 'function'){
            this.props.fnClick(e.currentTarget.innerText);
        }
        // console.log(e.currentTarget.innerText)
    }
    render(){
        const { num, choose } = this.props
        return(
               <div onClick={this.chooseActiveEl} className={num == choose ? 'activeElement' : 'page' }>
                   {num}
               </div>
        )
    }
}

export default Page