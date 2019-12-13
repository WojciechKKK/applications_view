import React, { Component } from 'react'
import FileElement from './FileElement.jsx'
import './FilesUpload.scss'

class FilesUpload extends Component{
    constructor(){
        super();
        this.state = {
            title: 'upload files here', // title layout
            titleBtn: 'drag & drop your files here',
            data: [
                {name: 'I don t know what is this kind of extension', type: 'rar', progress: 100, done: true},
                {name: 'This is an Illustrator file',                 type: 'ai',  progress: 50,  done: false},
                {name: 'finalfinalfinalfinalversion',                 type: 'psd', progress: 75,  done: false},
                {name: 'this is doper music',                         type: 'mp3', progress: 25,  done: false},
            ]
        }
    }
    render(){
        const { title, titleBtn, data } = this.state
        return(
            <div className="filesUploadComp">
                <div className="filesUploadContainer">
                    <h1 className="filesUploadText">
                        {title}
                    </h1>
                    {
                        data.map(el => <FileElement key={el.name} info={el} />)
                    }
                    <button className="filesUploadButton">
                        {titleBtn}
                    </button>
                </div>
            </div>
        )
    }
}

export default FilesUpload