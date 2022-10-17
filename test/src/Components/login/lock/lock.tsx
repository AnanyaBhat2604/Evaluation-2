import SignUp from "../../signUp/signUp"
import LockInput from "../lockInput/lockInput"
import { useState } from "react"
import "./lock.css"
import './../lockInput/lockInput.css'
import "../../signUp/signUp.css"

import { Routes, Route, Link } from "react-router-dom"

const Lock = () => {

  return (
    <div className="LockDisplay">
      <div className='lockBox'>
        <div className="lockImage"><img src={require("../../../assets/logo.png")} /></div>
        <h4 className='lockBoxText'>Protect & Manage every password in your business</h4>
      </div>

      <Routes>
        <Route path="/" element={<LockInput />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>

    </div>
  )
}

export default Lock