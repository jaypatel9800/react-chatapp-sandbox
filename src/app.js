import React from 'react'
import {BrowserRouter as Router, Route } from "react-router-dom"
import Join from './component/Join/Join'
import Chat from './component/Chat/Chat'
import "./app.css";
import group from "./icons/Group 1.svg"

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join}/>
            <Route path="/chat" component={Chat}/>
            <img className="group" src={group} alt="group"/>
        </Router>
    )
}

export default App
