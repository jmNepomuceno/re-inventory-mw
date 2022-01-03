import React from 'react'

const AsideComponents = (props) => {
    let paths = [props.onClickInventoryItems , props.onClickBorrowReceipts]
    //console.log(paths[props.id])
    return(
        <React.Fragment>
            <div className="aside-div" onClick={paths[props.id]}> 
                <label> {props.title} </label> 
                <img src={props.imgURL} alt="side-imgs"/>
            </div>
            
        </React.Fragment>
    )
}

export default AsideComponents