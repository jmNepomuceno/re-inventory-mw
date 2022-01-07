import React from 'react'

const BrwRtrnInfoComponents = (props) =>{
    return(
        <div className="row_divs">
            <p className="title_lbl"> {props.title} </p>
            <p className="info_lbl"> {props.info} </p>
        </div>
    )
}

export default BrwRtrnInfoComponents