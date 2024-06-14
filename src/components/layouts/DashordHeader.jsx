
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import React, {useContext} from "react";
 import Link from "next/link";
 import { signOut } from "next-auth/react";
 import AuthContext from "../../context/AuthContext";
const DashordHeader = ({OpenSidebar})  => {
  const { user } = useContext(AuthContext)
  const logoutHandler = () => {
    signOut();
  }
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon1' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
          
          
            <div class="dropdown">
            <button class="dropbtn">Profile</button>
            <div class="dropdown-content">
            <a href="/me">My Profile</a>
            <a href="/me/update">Update Profile</a>
              <a href="/me/update_password">Update Password</a>
           
              <a className="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
            onClick={logoutHandler}
          >
            Logout
          </a>
            </div>
</div>
        </div>
    </header>
  )
}

export default DashordHeader