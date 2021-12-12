import React from 'react'

const AsideComponents = (props) => {
    //console.log(props.args.imgURL)
    return(
        <React.Fragment>
            <div className="aside-div"> 
                <label> {props.title} </label> 
                <img src={props.imgURL} alt="side-imgs"/>
            </div>
            
        </React.Fragment>
    )
}

export default AsideComponents