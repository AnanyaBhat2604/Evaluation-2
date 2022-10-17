import LockInput from "../lockInput/lockInput"
import "./lock.css"

const Lock = () => {
  return (
    <div className="LockDisplay">
      <div className='lockBox'>
        <div className="lockImage"><img src={require("../../assets/logo.png")} /></div>
        <h4 className='lockBoxText'>Protect & Manage every password in your business</h4>
      </div>
      <LockInput />
    </div>
  )
}

export default Lock