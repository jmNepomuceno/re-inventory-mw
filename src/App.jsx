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
            window_width : window.innerWidth,
            visitor_name : ""
        }
    }

    handleSetVisitor = (value) => {
        this.setState({visitor_name : value})
    }

    render(){
        console.log(this.state.visitor_name)
        return(
            <Router basename='re-inventory-mw'>
                <React.Fragment>
                    <Routes>
                        <Route path="/" exact element={
                            <React.Fragment>
                                <Header/>
                                <LogIn 
                                    args={
                                        {
                                            onSetVisitor : this.handleSetVisitor
                                        }
                                    }
                                />
                            </React.Fragment>
                        } />
                        <Route path="/inventory" exact element={
                            <Inventory 
                                window_width={this.state.window_width}
                                args={
                                    {
                                        visitor_name : this.state.visitor_name
                                    }
                                }
                            />
                        }/>
    
                    </Routes>
                </React.Fragment>
            </Router>
    
        )
    } 
}

export default App