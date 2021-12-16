import React from 'react'

class ItemComponents extends React.Component {
    render(){
        return(
            <div className="item_div">
                
                <h1>Item Name</h1>
                <label>Available Pcs: </label>
                <img src={require('../imgs/inventory_imgs/book.png').default} alt="item_img" />

                <div className="item_div_footer">

                </div>
            </div>
        )
    }
}

export default ItemComponents