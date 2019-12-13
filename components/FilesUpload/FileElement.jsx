import React, { Component } from 'react';
import './FileElement.scss';
import rar from './image/rar.png';
import ai from './image/ai.png';
import psd from './image/psd.png';
import mp3 from './image/mp3.png';
import accept from './image/accept.png'
import noAccept from './image/no-accept.png'

class FileElement extends Component{
    constructor(){
        super();
    }
    checkImg = () => {
        const { info } = this.props;
        let final;
        if(info.type == 'rar'){
            final = rar
        } else if(info.type == 'ai'){
            final = ai
        }else if(info.type == 'psd'){
            final = psd
        }else if(info.type == 'mp3'){
            final = mp3
        }
        return final
    }
    checkDone = () => {
        const { info } = this.props;
        let final;
        if(info.done){
            final = accept
        } else {
            final = noAccept
        }
        return final
    }
    render(){
        const { info } = this.props;
        let finalImg = this.checkImg();
        let finalDone = this.checkDone();
        const styleDone = {
            backgroundImage: `url(${finalDone})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right'
        }
        return(
            <div className="fileElementComp">
                <div className="fileElementImg" style={{backgroundImage: `url(${finalImg})`}}></div>
                <div className="fileElementInfo">
                    <p className="fileElementText">
                        {info.name + '.' + info.type}
                    </p>
                    <div className="fileElementProgress">
                        <div className="fileProgessProcent" style={{width: `${info.progress}%`}}></div>
                    </div>
                </div>
                <div className="fileElementDone" style={styleDone}></div>
            </div>
        )
    }
}

export default FileElement