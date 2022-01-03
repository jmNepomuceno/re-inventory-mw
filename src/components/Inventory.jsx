import React from 'react'
import {Link} from 'react-router-dom'

// Components
import AsideComponents from './AsideComponents'
import ItemComponents from './ItemComponents'
import BorrowReceipts from './BorrowReceipts'

// databases
// import itemDB from '../database/itemDB'

class Inventory extends React.Component {

    constructor(props){
        super()

        const {window_width} = props

        this.state = {
            inventory_aside_style : {
                display : (window_width <= 770) ? "none" : "block"
            },
            confirmation_log_out_style : {
                display : "none"
            }
        }

    }

    handleMenuBtnClick = () =>{
        this.setState(prevState =>({
            ...prevState,
            inventory_aside_style : {
                ...prevState.inventory_aside_style,
                display: (this.state.inventory_aside_style.display === "block") ? "none" : "block"
            }
        }))
    }

    handleLogOut = () =>{
        this.setState(prevState =>({
            ...prevState,
            confirmation_log_out_style : {
                ...prevState.confirmation_log_out_style,
                display: (this.state.confirmation_log_out_style.display === "block") ? "none" : "block"
            }
        }))
    }

    render() { 
        const {window_width} = this.props

        const display_menu_btn_style = {
            display : (window_width <= 770) ? "block" : "none"
        }
        
        //console.log(this.props.args.sideBarStyle)

        const itemComponentsRow = this.props.args.itemDB.map(elem => { 
            return(
                <ItemComponents 
                    key={elem.id} 
                    args={{
                        elem : elem,
                        onIncrementPcs : this.props.args.onIncrementPcs,
                        onDecrementPcs : this.props.args.onDecrementPcs,
                        confirm_btn_style : this.props.args.confirm_btn_style,
                        onConfirmBorrow : this.props.args.onConfirmBorrow,
                    }} 
                />    
            )
        }) 

        return(
            <div className="inventory_div">
     
                <aside style={this.state.inventory_aside_style}  className="inventory_aside">

                    <div className="invetory_aside_miniHeader">
                        <h1> {this.props.args.visitor_name} </h1>
                    </div>

                    <AsideComponents 
                        title={"Inventory Items"} 
                        imgURL={require("../imgs/inventory_imgs/shop.png").default}
                        onClickInventoryItems = {this.props.args.onClickInventoryItems}
                        id={0}
                    />

                    <AsideComponents 
                        title={"Borrow Receipts"} 
                        imgURL={require("../imgs/inventory_imgs/receipt.png").default}
                        onClickBorrowReceipts = {this.props.args.onClickBorrowReceipts}
                        id={1}
                    />

                </aside>

                <header className="inventory_header">
                    {/* Mobile Nav Menu */}
                    <button 
                        style={display_menu_btn_style} 
                        className="mobile_menu_btn"
                        onClick={this.handleMenuBtnClick}>
                        
                    </button>

                    <label onClick={this.handleLogOut}>Log out</label>

                    <div style={this.state.confirmation_log_out_style} className="confirmation_log_out_div">
                        <label>Are you sure you want to log out?</label>
                        <Link to="/">
                            <button id="logout_yes_btn">Yes</button>
                        </Link>
                        <button onClick={this.handleLogOut} id="logout_no_btn">No</button>
                    </div>
                </header>

                <main className="inventory_main_inventory" style={this.props.args.sideBarStyle[0]}>
                    {itemComponentsRow}
                    <div className="inventory_information_outer_div">
        
                    </div>
                </main>
                
                <main className="inventory_main_borrow_receipts" style={this.props.args.sideBarStyle[1]}>
                    <BorrowReceipts 
                        args={{
                            is_borrowed : this.props.args.is_borrowed
                        }} 
                    />
                </main>
            </div>
        )
    }
}
 
export default Inventory;