import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/tuat.png'

import user_menu from '../../assets/JsonData/user_menus.json'

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import logo from '../../assets/images/logo.png'

import NavBar from '../navbar/navbar'

import Usericon  from '../../assets/images/user.jpg'

import Userdropdown from '../userdropdown/userdropdown'


const curr_user = {
    picture: Usericon
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = () => (
    <div className="dropdown__toggle">
            <i className='bx bx-user'></i>
    </div>
)

const renderUserMenu =(item, index) => (
    
        <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
    

)






const Topnav = () => {

    
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    

    function AuthState(props){
        const isauth = props.isloggedIn; 
        if(isauth){
           
            return  
            {<div>

            </div>}<button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>

        }
        return  <button onClick={() => loginWithRedirect()}>Log In</button>
    }

    function User(props){
        const user = props.userinfo;
        return (
        <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.picture} alt="" /> 
        </div>
        <div className="topnav__right-user__name">
            {user.name} 
        </div>
    </div>
        )
        
    }

     

    var isauth = isAuthenticated
    

    console.log("auth",isauth)
    renderUserToggle(user)
    return (
        <div className='topnav'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>

            {/* <div className="topnav__search">
                <input type="text" placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div> */}
            

            <div className="topnav__right">

                {!isauth && (<div className="topnav__right-item">
                    {/* dropdown here */}
                    {<Userdropdown
                        customToggle={() => renderUserToggle()}
                        //customToggle={() => <User userinfo = {curr_user}></User>}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />}
                </div>)}
                

                
                {isauth && (<div className="topnav__right-item">
                    {/* dropdown here */}
                    {<Userdropdown
                        // customToggle={() => renderUserToggle(userinfo)}
                        customToggle={() => <User userinfo = {user}></User>}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />}

                </div>)}

                {/* <AuthState isloggedIn={isAuthenticated} /> */}

                <div className="topnav__right-item">
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu/>
                </div>
            </div>
        </div>
    )
}

export default Topnav
