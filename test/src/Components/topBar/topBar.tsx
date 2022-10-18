import './topBar.css';

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarContents">
        <div className="topBarLogo">
          <img src={require('../../assets/Images/pass_logo.png')} alt="homePage logo" />
        </div>
        <div className="topBarIcons">
          <div className="profileSync">
            <img src={require('../../assets/Images/sync.png')} alt="Sync" />
          </div>
          <div className="profile">
            <img src={require('../../assets/Images/profile.png')} alt="Profile"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar