import React from 'react'

const LogIn = () =>{
    return(
        <main className="main_index">

            <div className="card">
                <div className="content"> 
                    <img src={require('../imgs/index_imgs/teachersImg.jpg').default} alt="teachers-img" />
                    <p> 
                        <span>Teachers</span><br/><br/> 
                        Teachers can Borrow and Return items from this Inventory.
                    </p>
                    <button>Visit As</button>
                </div>
            </div>

            <div className="card">
                <div className="content"> 
                    <img src={require('../imgs/index_imgs/adminImg.jpg').default} alt="teachers-img" />
                    <p> 
                        <span>Admin</span><br/> <br/> 
                        Admin is the one who manage all the items in the Inventory.
                    </p>
                    <button>Visit As</button>
                </div>
            </div>

            <div className="card">
                <div className="content"> 
                    <img src={require('../imgs/index_imgs/collegeStudents.jpg').default} alt="teachers-img" />
                    <p> 
                        <span>Students</span><br/> <br/> 
                        Students can Borrow and Return items from this Inventory.
                    </p>
                    <button>Visit As</button>
                </div>
            </div>

        </main>
    )
}

export default LogIn