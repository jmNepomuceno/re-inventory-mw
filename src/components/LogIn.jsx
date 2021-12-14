import React from 'react'
import {Link} from 'react-router-dom'

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
            logIn_btn_styles : {
                pointerEvents : "none"
            },
            Borrow_btn_styles : {
                opacity : "1"
            },
            Return_btn_styles : {
                opacity : "1"
            },
            visitor_name : ""
        }
    }

    handleFrontCLick = (index,side,where) =>{
        this.setState(prevState =>({
            ...prevState,
            [index] : {
                ...prevState[index],
                [side] : {
                    ...prevState[index][side],
                    left : (where === "front") ? "-100%" : "0",
                },
            }
        }))

        this.setState(prevState =>({
            ...prevState,
            [index] : {
                ...prevState[index],
                "back" : {
                    ...prevState[index]["back"],
                    left : (where === "front") ? "0" : "100%",
                },
            }
        }))
    }

    handleBrwRtrnClick = (what) =>{
        this.setState({
            logIn_btn_styles : {
                pointerEvents : "auto"
            }
        })

        this.setState({
            [what] : {
                opacity : "0.3"
            }
        })

        what = (what === "Borrow_btn_styles") ? "Return_btn_styles" : "Borrow_btn_styles"

        this.setState({
            [what] : {
                opacity : "1"
            }
        })
    }

    handleSetVisitorName = (event) =>{
        this.setState({
            visitor_name : event.target.value
        })
    }

    render(){
        //console.log(this.state.visitor_name)
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
                        <button onClick={()=>this.handleFrontCLick(1,"front","front")}>Visit As</button>
                    </div>

                    {/* back content */}
                    <div style={this.state[1]["back"]} className="back-content"> 
                        <button id="back-btn" onClick={()=>this.handleFrontCLick(1,"front", "back")}>Back</button>

                        <img id="login-icon-img" src={require('../imgs/index_imgs/login.png').default} alt="login_icon"/>
                        <img id="first-name-img" src={require('../imgs/index_imgs/user.png').default} alt="user_icon"/>
                        <img id="last-name-img" src={require('../imgs/index_imgs/user.png').default} alt="user_icon"/>
                        <img id="id-num-img" src={require('../imgs/index_imgs/id.png').default} alt="user_icon"/>
                        
                        <button 
                            onClick={() => this.handleBrwRtrnClick("Return_btn_styles")} 
                            style={this.state.Borrow_btn_styles}
                            id="borrow-btn">
                            Borrow
                        </button>
                        <button 
                            onClick={() => this.handleBrwRtrnClick("Borrow_btn_styles")} 
                            style={this.state.Return_btn_styles}
                            id="return-btn">
                            Return
                        </button>

                        <form>
                            <input id="first-name-txt" onChange={this.handleSetVisitorName} type="text" placeholder="First Name" autoComplete="off" required />
                            <input id="last-name-txt" type="text" placeholder="Last Name" autoComplete="off" required />
                            <input id="id-num-txt" type="text" placeholder="ID Number" autoComplete="off" required />

                            <Link to="/inventory">
                                <button 
                                    style={this.state.logIn_btn_styles}  
                                    id="login-btn"
                                    onClick={() => this.props.args.onSetVisitor(this.state.visitor_name)}> 
                                    <span>LOG IN</span>     
                                </button>
                            </Link>
                        </form>
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
                        <button onClick={()=>this.handleFrontCLick(2,"front","front")}>Visit As</button>
                    </div>

                    {/* back content */}
                    <div style={this.state[2]["back"]} className="back-content"> 
                        <button id="back-btn" onClick={()=>this.handleFrontCLick(2,"front", "back")}>Back</button>

                        <img src={require('../imgs/index_imgs/login.png').default} alt="login_icon"/>
                        <img id="username-img" src={require('../imgs/index_imgs/user.png').default} alt="user_icon"/>
                        <img id="password-img" src={require('../imgs/index_imgs/password.png').default} alt="user_icon"/>

                        <form > 
                            <input id="username-txt" onChange={this.handleSetVisitorName} type="text" placeholder="Username" autoComplete="off" required />
                            <input id="password-txt" type="text" placeholder="Password" autoComplete="off" required />

                            <Link to="/inventory">
                                <button 
                                    id="login-btn"
                                    onClick={() => this.props.args.onSetVisitor(this.state.visitor_name)}> 
                                    <span>LOG IN</span>     
                                </button>
                            </Link>
                        </form>
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
                        <button onClick={()=>this.handleFrontCLick(3,"front","front")}>Visit As</button>
                    </div>

                    {/* back content */}
                    <div style={this.state[3]["back"]} className="back-content"> 
                        <button id="back-btn" onClick={()=>this.handleFrontCLick(3,"front", "back")}>Back</button>

                        <img id="login-icon-img" src={require('../imgs/index_imgs/login.png').default} alt="login_icon"/>
                        <img id="first-name-img" src={require('../imgs/index_imgs/user.png').default} alt="user_icon"/>
                        <img id="last-name-img" src={require('../imgs/index_imgs/user.png').default} alt="user_icon"/>
                        <img id="id-num-img" src={require('../imgs/index_imgs/id.png').default} alt="user_icon"/>

                        <button 
                            onClick={() => this.handleBrwRtrnClick("Return_btn_styles")} 
                            style={this.state.Borrow_btn_styles}
                            id="borrow-btn">
                            Borrow
                        </button>
                        <button 
                            onClick={() => this.handleBrwRtrnClick("Borrow_btn_styles")} 
                            style={this.state.Return_btn_styles}
                            id="return-btn">
                            Return
                        </button>

                        <form>
                            <input id="first-name-txt" onChange={this.handleSetVisitorName} type="text" placeholder="First Name" autoComplete="off" required />
                            <input id="last-name-txt" type="text" placeholder="Last Name" autoComplete="off" required />
                            <input id="id-num-txt" type="text" placeholder="ID Number" autoComplete="off" required />

                            <Link to="/inventory">
                                <button 
                                    style={this.state.logIn_btn_styles}  
                                    id="login-btn"
                                    onClick={() => this.props.args.onSetVisitor(this.state.visitor_name)}> 
                                    <span>LOG IN</span>     
                                </button>
                            </Link>
                        </form>

                    </div>
                </div>

            </main>
        )
    }
}

export default LogIn