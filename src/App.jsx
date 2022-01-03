import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Header from './components/Header'
import LogIn from './components/LogIn'
import Inventory from './components/Inventory'


// databases
import itemDB from './database/itemDB'


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
            },
            inventory:[],
            confirm_btn_style : {

            },
            sideBarStyle : [
                {
                    display : "block"
                },
                {
                    display : "none"     
                }
            ]
        }

        this.limitPcs = itemDB.map(elem => elem.pcs)
    }

    componentDidMount(){
        this.setState({
            inventory : this.state.inventory.concat(itemDB)
        })
        
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

    handleIncrementPcs = (id) =>{
        if(this.state.inventory[id - 1].pcs === this.limitPcs[id - 1]){
            this.setState(prevState =>({
                ...prevState,
                confirm_btn_style : {
                }
            }))
        }
        
        if(this.state.inventory[id - 1].pcs < this.limitPcs[id - 1]){
            this.setState(prevState => ({
                inventory: prevState.inventory.map(
                    obj => (obj.id === id ? Object.assign(obj, { pcs: this.state.inventory[id - 1].pcs + 1 }) : obj)
                )
            }))
        }   
    }

    handleDecrementPcs = (id) =>{
        if(this.state.inventory[id - 1].pcs > 0){
            this.setState(prevState => ({
                inventory: prevState.inventory.map(
                    obj => (obj.id === id ? Object.assign(obj, { pcs: this.state.inventory[id - 1].pcs - 1 }) : obj)
                )
            }))
        }

        this.setState(prevState =>({
            ...prevState,
            confirm_btn_style : {
                ...prevState.confirm_btn_style,
                opacity : 1,
                pointerEvents : "auto"
            }
        }))
    }

    handleConfirmBorrow = (id) =>{
        this.limitPcs[id - 1] = this.state.inventory[id - 1].pcs

        this.setState({
            confirm_btn_style : {

            }
        })
    }

    handleInventoryItems = () =>{
        this.setState({
            sideBarStyle : [
                {
                    display : "block"
                },
                {
                    display : "none"     
                }
            ]
        })

    }

    handleBorrowReceipts = () =>{
        this.setState({
            sideBarStyle : [
                {
                    display : "none"
                },
                {
                    display : "block"     
                }
            ]
        })
    }

    render(){
        console.log(this.state.sideBarStyle)
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
                                            this.state.visitors_info.admin_name,
                                        itemDB : this.state.inventory,
                                        onIncrementPcs : this.handleIncrementPcs,
                                        onDecrementPcs : this.handleDecrementPcs,
                                        confirm_btn_style : this.state.confirm_btn_style,
                                        onConfirmBorrow : this.handleConfirmBorrow,
                                        onClickInventoryItems : this.handleInventoryItems,
                                        onClickBorrowReceipts : this.handleBorrowReceipts,
                                        sideBarStyle : this.state.sideBarStyle
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