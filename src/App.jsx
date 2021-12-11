import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Header from './components/Header'
import LogIn from './components/LogIn'

const App = () =>{
    return(
        <Router>
            <React.Fragment>
                <Routes>
                    <Route path="/" exact element={
                        <React.Fragment>
                            <Header/>
                            <LogIn />
                        </React.Fragment>
                    } />
                    <Route path="/about" exact element={<LogIn/>}/>

                </Routes>
            </React.Fragment>
        </Router>

    )
}

export default App