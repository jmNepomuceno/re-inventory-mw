import React from 'react'

class ItemComponents extends React.Component {
    render(){

        return(
            <div className="item_div">
                
                <h1> {this.props.args.elem.name} </h1>
                <label>Available Pcs: <span> {this.props.args.elem.pcs} </span> </label>
                <img src={require("../imgs/inventory_imgs/" + this.props.args.elem.imgURL).default} alt="item_img" />

                <div className="item_div_footer">
                    <button id="plus_btn" onClick={() => this.props.args.onIncrementPcs(this.props.args.elem.id)} > + </button>
                    <button id="minus_btn" onClick={() => this.props.args.onDecrementPcs(this.props.args.elem.id)}> - </button>
                    <label id="pcs_counter"> 0 </label>
                    <button id="confirm_btn"> CONFIRM BURROW </button>
                </div>
            </div>
        )
    }
}

export default ItemComponents