import React from 'react'
import "./bodyHome.css"

const BodyHome = () => {
    return (
        <div className='bodyHome'>
            <div className='homeContainer'>
                <div className="homeHeader">
                    <div className="headerTitle">Sites</div>
                    <div className="headerComponents">
                        <div className="headerSearch">
                            <input type="text" className="searchbar" placeholder="Search" />
                            <img src={require('../../assets/Images/search.png')} alt="search" className="searchIcon" />
                        </div>
                        <div className="headerAddButton">
                            <img src={require('../../assets/Images/add_btn.png')} alt="add" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeBodyContainerBox">
        <div className="homeBodyContents">
            <div className="homeBodyText">
              <div>Please Click on the “+” symbol to add sites</div>
            </div>
        </div>
      </div>
        </div>
    )
}

export default BodyHome