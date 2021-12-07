import React from 'react'

const Header = () =>{
    return(
        <header className="header_index">
            <img src={require('../imgs/index_imgs/bpsuLogo.png').default} alt="bpsu-logo" />
            <h1> 
                <span>I</span>NVENTORY <br/> <span>M</span>ANAGEMENT <span>W</span>EBSITE
            </h1>
            <img src={require('../imgs/index_imgs/inventory.png').default} alt="inventory-icon" />
        </header>
    )
}

export default Header