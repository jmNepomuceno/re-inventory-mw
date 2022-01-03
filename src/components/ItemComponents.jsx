import React from 'react'

class ItemComponents extends React.Component {
    render(){
        const minus_pcs_style = {
            opacity : (this.props.args.elem.pcs !== 0) ? 1 : 0.5,
            pointerEvents : (this.props.args.elem.pcs !== 0) ? "auto" : "none"
        }

        let confirm_btn_style_lcl 
        //console.log(this.props.args.confirm_btn_style)
        
        if(this.props.args.confirm_btn_style){
            confirm_btn_style_lcl = this.props.args.confirm_btn_style
        }else{
            confirm_btn_style_lcl = {
                opacity : 0.5,
                pointerEvents : "none"
            }
        }

        return(
            <div className="item_div">
                
                <h1> {this.props.args.elem.name} </h1>
                <label>Available Pcs: <span> {this.props.args.elem.pcs} </span> </label>
                <img src={require("../imgs/inventory_imgs/" + this.props.args.elem.imgURL).default} alt="item_img" />

                <div className="item_div_footer">
                    <button id="plus_btn" onClick={() => this.props.args.onIncrementPcs(this.props.args.elem.id)} > + </button>
                    <button style={minus_pcs_style} id="minus_btn" onClick={() => this.props.args.onDecrementPcs(this.props.args.elem.id)}> - </button>
                    <label id="pcs_counter"> 0 </label>
                    <button style={confirm_btn_style_lcl} id="confirm_btn" 
                        onClick={() => this.props.args.onConfirmBorrow(this.props.args.elem.id)} >
                        CONFIRM BURROW 
                    </button>
                </div>
            </div>
        )
    }
}

export default ItemComponents