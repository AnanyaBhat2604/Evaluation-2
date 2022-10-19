import SignUp from "../../signUp/signUp"
import LockInput from "../lockInput/lockInput"
import { useState } from "react"
import "./lock.css"
import './../lockInput/lockInput.css'
import "../../signUp/signUp.css"

import { Routes, Route, Link } from "react-router-dom"
import Toast from "../../toast/toast"

const Lock = () => {

  return (
    <div className="lockParent">
      <div className="LockDisplay">
        <div className='lockBox'>
          <div className="lockImage"><img src={require("../../../assets/logo.png")} /></div>
          <div className="lockMinImage"><img src={require("../../../assets/Images/logo.png")} /></div>
          <h4 className='lockBoxText'>Protect & Manage every password in your business</h4>
          <div className="tabsContainer">
            <div className="signInTab">
              <Link to="/signin" className="linkToSign">
                Sign-IN
              </Link>
            </div>
            <div className="signUpTab">
              <Link to="/signup" className="linkToSign">
                Sign-UP
              </Link>
            </div>
          </div>
        </div>

        <LockInput />
      </div>
    </div>
  )
}

export default Lock