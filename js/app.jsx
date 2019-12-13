import ReactDOM from 'react-dom';
import React, { Component } from 'react'
import '../styles/main.scss'
import Exercises from '../components/Exercises.jsx'

const App = () => <Exercises />


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
