import React from 'react'

// Components
import Header from './components/Header'
import LogIn from './components/LogIn'

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <LogIn />
            </React.Fragment>
        )
    }
}

export default App