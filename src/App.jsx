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
            ],
            is_borrowed : false,
            brw_rtrn_info_style : {
                display : "none"
            },
            temp_confirm_btn_index : -1,
            temp_decrement_btn_index : -1
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

        for(let i = 1; i <= this.state.inventory.length; i++){
            if(id !== i){
                this.setState(prevState => ({
                    inventory: prevState.inventory.map(
                        obj => (obj.id === i ? Object.assign(obj, { pcs: this.limitPcs[i - 1] }) : obj)
                    )
                }))
            }
        }

        //console.log(this.state.inventory)

        this.setState(prevState =>({
            ...prevState,
            confirm_btn_style : {
                ...prevState.confirm_btn_style,
                opacity : 1,
                pointerEvents : "auto"
            }
        }))

        this.setState({
            temp_decrement_btn_index : id
        })
    }

    handleConfirmBorrow = (id) =>{

        this.setState({
            temp_confirm_btn_index : id
        })
        

        this.setState({
            confirm_btn_style : {

            }
        })

        this.setState(prevState =>({
            ...prevState,
            brw_rtrn_info_style : {
                ...prevState.brw_rtrn_info_style,
                display : "block"
            }
        }))
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

    handleFinalConfirmBorrow = (what) => {
        if(what === "CONFIRM"){
            alert("Successfuly Borrowed Item")

            let id = this.state.temp_confirm_btn_index
            this.limitPcs[id - 1] = this.state.inventory[id - 1].pcs
            
            this.setState({
                is_borrowed : !this.state.is_borrowed
            })
        }
        
        this.setState(prevState =>({
            ...prevState,
            brw_rtrn_info_style : {
                ...prevState.brw_rtrn_info_style,
                display : "none"
            }
        }))
    }

    render(){
        // console.log(this.state.temp_decrement_btn_index)
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
                                        sideBarStyle : this.state.sideBarStyle,
                                        is_borrowed : this.state.is_borrowed,
                                        brw_rtrn_info_style : this.state.brw_rtrn_info_style,
                                        onFinalConfirmBorrow : this.handleFinalConfirmBorrow,
                                        temp_decrement_btn_index : this.state.temp_decrement_btn_index
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