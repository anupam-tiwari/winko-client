import React, {useRef} from 'react'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import './userdropdown.css'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const Userdropdown = props => {

    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    

    function AuthState(props){
        const isauth = props.isloggedIn; 
        if(isauth){
           
            return  <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>

        }
        return  <button onClick={() => loginWithRedirect()}>Log In</button>
    }

    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)
    
    
    return (
        <div className='dropdown'>
            <button ref={dropdown_toggle_el} className="dropdown__toggle">
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className='dropdown__toggle-badge'>{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div ref={dropdown_content_el} className="dropdown__content">
                 {
                     <div>
                         <Link>
                        {isAuthenticated && (<div className="notification-item" onClick={console.log("ouch")}>
                   <i className={"bx bx-user"}></i>
                   <span>Profile</span>
                 </div>)} 
                 </Link>

                 <Link to="/home">
                        {isAuthenticated && (<div className="notification-item" onClick={console.log("ouch")}>
                   <i className={"bx bxs-bar-chart-square"}></i>
                   <span>Dashboard</span>
                 </div>)} 
                 </Link>


                 
                         
                        
                <Link>
                {!isAuthenticated && (<div className="notification-item">
                 <i className={"bx bx-log-out-circle bx-rotate-180"}></i>
                 <span onClick={() => loginWithRedirect()}>Login</span>
               </div>)}
               </Link>
                 
                <Link>
                {isAuthenticated && (<div className="notification-item">
                 <i className={"bx bx-log-out-circle bx-rotate-180"}></i>
                 <span onClick={() => logout({ returnTo: window.location.origin })}>Logout</span>
               </div>)}
               </Link>
               

               </div>
                    
                } 
                {
                    props.renderFooter ? (
                        <div className="dropdown__footer">
                            {props.renderFooter()}
                        </div>
                    ) : ''
                }   
            </div>

            


            
        </div>
    )
}

export default Userdropdown
