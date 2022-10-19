import BodyHome from '../../Components/bodyHome/bodyHome'
import SideBar from '../../Components/sideBar/sideBar'
import TopBar from '../../Components/topBar/topBar'
import './homePage.css'

const HomePage = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="sideBar">
          <SideBar />
        </div>
        <div className="topBar">
          <TopBar />
        </div>
        <div className="mobileTopBar">
          <div className="mobileTopBarFirst">
            <img src={require('../../assets/Images/burger_menu.png')} />
            <img src={require('../../assets/Images/PASS MANAGER.png')} />
          </div>
          <div className="mobileTopBarLast">
            <img src={require('../../assets/Images/search.png')}  />
            <img src={require('../../assets/Images/sync.png')} />
            <img src={require('../../assets/Images/profile.png')} />
          </div>
        </div>
        <div className="bodyHome">
          <BodyHome />
        </div>
      </div>
    </div>
  )
}

export default HomePage