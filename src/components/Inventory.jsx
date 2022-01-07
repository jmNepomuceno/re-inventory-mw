import React from 'react'
import {Link} from 'react-router-dom'

// Components
import AsideComponents from './AsideComponents'
import ItemComponents from './ItemComponents'
import BorrowReceipts from './BorrowReceipts'
import BrwRtrnInfoComponents from './BrwRtrnInfoComponents'

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
                        <div className="inventory_information_inner_div">

                            <div className="borrowed_information_div">
                                <h3 className="borrow_info_title">Borrowed Information</h3>
                                <BrwRtrnInfoComponents title="First Name" info="Name" />
                                <BrwRtrnInfoComponents title="Last Name" info="Name" />
                                <BrwRtrnInfoComponents title="Student ID #" info="Name" />
                                <BrwRtrnInfoComponents title="Item Borrowed" info="Name" />
                                <BrwRtrnInfoComponents title="Item Pieces" info="Name" />
                                <BrwRtrnInfoComponents title="Date Borrowed" info="Name" />
                                <BrwRtrnInfoComponents title="Time Borrowed" info="Name" />

                            </div>

                            <div className="return_information_div">
                                <h3 className="return_info_title">Return Information</h3>
                                <BrwRtrnInfoComponents title="Item to Return" info="Name" />
                                <BrwRtrnInfoComponents title="Item Pieces" info="Name" />
                                <BrwRtrnInfoComponents title="Date to Return" info="Name" />
                                <BrwRtrnInfoComponents title="Time to Return" info="Name" />
                                <BrwRtrnInfoComponents title="Penalty 1 Day" info="Name" />
                                <BrwRtrnInfoComponents title="Penalty 3 Days" info="Name" />
                                <BrwRtrnInfoComponents title="Penalty 5 Days" info="Name" />
                            </div>

                            <div className="how_to_claim_div">
                                <h3 className="claim_title">How to Claim the Item/s</h3>
                                <BrwRtrnInfoComponents title="Time to Claim" info="Name" />
                                <BrwRtrnInfoComponents title="Where to Claim" info="Name" />
                                <BrwRtrnInfoComponents title="Look For" info="Name" />

                                <p className="claim_note">
                                    <b>Note:</b> Inventory Room is close at Lunch break (12:00nn-1:30pm). Please
                                    claim the item/s only on the given time, if exceeds on the alloted time,
                                    the borrow request will be gone. Make sure to have a copy of this receipt.
                                </p>

                                <button className="cancel_btn">CANCEL</button>
                                <button className="confirm_btn">CONFIRM</button>
                            </div>

                        </div>
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