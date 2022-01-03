import React from 'react'

class BorrowReceipts extends React.Component {
    render(){
        if(!this.props.args.is_borrowed){
            return(
                <div className="borrow_receipt_div">
                    <img src={require('../imgs/inventory_imgs/clipboard.png').default} alt="img" />
                    <h1>Empty Borrowed Receipt</h1>
                </div>
            )
        }
        
        return(
            <div className="borrow_receipt_div">
                    <h1>denzelle</h1>
            </div>
        )
    }
}

export default BorrowReceipts