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
            visitors_info : {
                first_name : "",
                last_name : "",
                id_num : 0,
                admin_name : "",
                admin_password : ""
            }
        }
    }

    handleSetVisitor = (value) => {
        // this.setState({visitor_name : value})
        console.log(value)
        this.setState(prevState =>({
            ...prevState,
            visitors_info : {
                ...prevState.visitors_info,
                first_name : value.first_name,
                last_name : value.last_name,
                id_num : value.id_num,
                admin_name : value.admin_name,
                admin_password : value.admin_password
            }
        }))
    }

    render(){
        //console.log(this.state.visitors_info)
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
                                        visitor_name : (this.state.visitors_info.first_name !== "") ?  
                                            this.state.visitors_info.first_name :
                                            this.state.visitors_info.admin_name
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