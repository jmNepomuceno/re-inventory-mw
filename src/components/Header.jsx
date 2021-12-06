import React from 'react'

const Header = () =>{
    return(
        <header>
            <img src={require('../imgs/index_imgs/bpsuLogo.png').default} alt="bpsu-logo" />
            <h1> 
                <span>I</span>NVENTORY <br/> <span>M</span>ANAGEMENT <span>W</span>EBSITE
            </h1>
            <img src={require('../imgs/index_imgs/inventory.png').default} alt="inventory-icon" />
            <h1>Monkey Gori</h1>
        </header>
    )
}

export default Header