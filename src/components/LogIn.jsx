import React from 'react'

class LogIn extends React.Component {

    constructor(){
        super()
        this.state = {
            1 : {
                front : {
                    left : "0",
                    top: "0"
                },
                back : {
                    left : "100%",
                    top: "0"
                }
            },
            2 : {
                front : {
                    left : "0",
                    top: "0"
                },
                back : {
                    left : "100%",
                    top: "0"
                }
            },
            3 : {
                front : {
                    left : "0",
                    top: "0"
                },
                back : {
                    left : "100%",
                    top: "0"
                }
            },
        }
    }

    handleFrontCLick = (index,side) =>{
        this.setState(prevState =>({
            ...prevState,
            [index] : {
                ...prevState[index],
                [side] : {
                    ...prevState[index][side],
                    left : "-100%",
                },
            }
        }))

        this.setState(prevState =>({
            ...prevState,
            [index] : {
                ...prevState[index],
                "back" : {
                    ...prevState[index]["back"],
                    left : "0",
                },
            }
        }))
    }

    render(){
        console.log(this.state)
        return(
            <main className="main_index">

                <div className="card">
                    {/* front content */}
                    <div style={this.state[1]["front"]} className="content"> 
                        <img src={require('../imgs/index_imgs/teachersImg.jpg').default} alt="teachers-img" />
                        <p> 
                            <span>Teachers</span><br/><br/> 
                            Teachers can Borrow and Return items from this Inventory.
                        </p>
                        <button onClick={()=>this.handleFrontCLick(1,"front")}>Visit As</button>
                    </div>

                    {/* back content */}
                    <div style={this.state[1]["back"]} className="back-content"> 
                        <button>Back</button>

                        <img id="login-icon-img" src={require('../imgs/index_imgs/login.png').default} alt="login_icon"/>
                        <img id="first-name-img" src={require('../imgs/index_imgs/user.png').default} alt="user_icon"/>
                        <img id="last-name-img" src={require('../imgs/index_imgs/user.png').default} alt="user_icon"/>
                        <img id="id-num-img" src={require('../imgs/index_imgs/id.png').default} alt="user_icon"/>
                        
                        <input id="first-name-txt" type="text" placeholder="First Name" />
                        <input id="last-name-txt" type="text" placeholder="Last Name" />
                        <input id="id-num-txt" type="text" placeholder="ID Number" />
                    </div>
                </div>

                <div className="card">
                    {/* front end */}
                    <div style={this.state[2]["front"]} className="content"> 
                        <img src={require('../imgs/index_imgs/adminImg.jpg').default} alt="teachers-img" />
                        <p> 
                            <span>Admin</span><br/> <br/> 
                            Admin is the one who manage all the items in the Inventory.
                        </p>
                        <button onClick={()=>this.handleFrontCLick(2,"front")}>Visit As</button>
                    </div>

                    {/* back content */}
                    <div style={this.state[2]["back"]} className="back-content"> 
                        <button>Back</button>

                        <img src={require('../imgs/index_imgs/login.png').default} alt="login_icon"/>
                        <img id="username-img" src={require('../imgs/index_imgs/user.png').default} alt="user_icon"/>
                        <img id="password-img" src={require('../imgs/index_imgs/password.png').default} alt="user_icon"/>

                        <input id="username-txt" type="text" placeholder="Username" />
                        <input id="password-txt" type="text" placeholder="Password" />
                    </div>
                </div>

                <div className="card">
                    {/* front end */}
                    <div style={this.state[3]["front"]} className="content"> 
                        <img src={require('../imgs/index_imgs/collegeStudents.jpg').default} alt="teachers-img" />
                        <p> 
                            <span>Students</span><br/> <br/> 
                            Students can Borrow and Return items from this Inventory.
                        </p>
                        <button onClick={()=>this.handleFrontCLick(3,"front")}>Visit As</button>
                    </div>

                    {/* back content */}
                    <div style={this.state[3]["back"]} className="back-content"> 
                        <button>Back</button>

                        <img id="login-icon-img" src={require('../imgs/index_imgs/login.png').default} alt="login_icon"/>
                        <img id="first-name-img" src={require('../imgs/index_imgs/user.png').default} alt="user_icon"/>
                        <img id="last-name-img" src={require('../imgs/index_imgs/user.png').default} alt="user_icon"/>
                        <img id="id-num-img" src={require('../imgs/index_imgs/id.png').default} alt="user_icon"/>

                        <input id="first-name-txt" type="text" placeholder="First Name" />
                        <input id="last-name-txt" type="text" placeholder="Last Name" />
                        <input id="id-num-txt" type="text" placeholder="ID Number" />
                    </div>
                </div>

            </main>
        )
    }
}

export default LogIn