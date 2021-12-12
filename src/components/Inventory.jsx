import React from 'react'

// Components
import AsideComponents from './AsideComponents'

class Inventory extends React.Component {

    constructor(props){
        super()

        const {window_width} = props

        this.state = {
            inventory_aside_style : {
                display : (window_width <= 420) ? "none" : "block"
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

    render() { 
        const {window_width} = this.props

        const display_menu_btn_style = {
            display : (window_width <= 420) ? "block" : "none"
        }

        // console.log(display_menu_btn_style.display)
        console.log(this.state.inventory_aside_style)
        return(
            <div className="inventory_div">
     
                <aside style={this.state.inventory_aside_style}  className="inventory_aside">

                    <div className="invetory_aside_miniHeader">
                        <h1>Kyla</h1>
                    </div>

                    <AsideComponents 
                        title={"Inventory Items"} 
                        imgURL={require("../imgs/inventory_imgs/shop.png").default}
                    />

                    <AsideComponents 
                        title={"Borrow Receipts"} 
                        imgURL={require("../imgs/inventory_imgs/receipt.png").default}
                    />

                </aside>

                <header className="inventory_header">
                    {/* Mobile Nav Menu */}
                    <button 
                        style={display_menu_btn_style} 
                        className="mobile_menu_btn"
                        onClick={this.handleMenuBtnClick}>
                        
                    </button>
                </header>
                
            </div>
        )
    }
}
 
export default Inventory;