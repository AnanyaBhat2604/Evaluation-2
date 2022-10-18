import './sideBar.css'

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarContents">
        <div className="burgerMenuIcon">
          <img src={require('../../assets/Images/burger_menu.png')} alt="burger menu" />
        </div>
        <div className="homeIcon">
          <img src={require('../../assets/Images/home_icn.png')} alt="" />
          <div className="homeActive"></div>
        </div>
      </div>
    </div>
  )
}

export default SideBar