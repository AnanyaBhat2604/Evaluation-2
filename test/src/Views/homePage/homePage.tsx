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
        <div className="bodyHome">
          <BodyHome />
        </div>
      </div>
    </div>
  )
}

export default HomePage