import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Header from './components/Header'
import LogIn from './components/LogIn'
import Inventory from './components/Inventory'

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            window_width : window.innerWidth
        }
    }

    render(){
        return(
            <Router basename=''>
                <React.Fragment>
                    <Routes>
                        <Route path="/" exact element={
                            <React.Fragment>
                                <Header/>
                                <LogIn />
                            </React.Fragment>
                        } />
                        <Route path="/inventory" exact element={
                            <Inventory window_width={this.state.window_width}/>
                        }/>
    
                    </Routes>
                </React.Fragment>
            </Router>
    
        )
    } 
}

export default App