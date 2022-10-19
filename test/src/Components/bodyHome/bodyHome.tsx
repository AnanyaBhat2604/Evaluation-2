import React, { useState } from 'react'
import "./bodyHome.css"

const BodyHome = () => {

    const [state, setState] = useState('');
    const [modal, setModal] = useState(false)
    // const [data, setData] = useState(true)
    const showModal = () => {
        setModal(!modal)
    }

    const data = [
        {
            siteName: 'Facebook',
            url: 'www.facebook.com',
            sector: 'Social Media',
            userName: 'ssmraok',
            sitePassword: 'abcdXYZ',
            notes: '',
            icon: require('../../assets/Images/Facebook.png'),
        },
        {
            siteName: 'YouTube',
            url: 'www.youtube.com',
            sector: 'Social Media',
            userName: 'ssmraok',
            sitePassword: 'abcd123',
            notes: '',
            icon: require("../../assets/Images/YouTube.png"),
        },
        {
            siteName: 'Linkedin',
            url: 'www.linkedin.com',
            sector: 'Social Media',
            userName: 'ssmraok',
            sitePassword: 'abcd123',
            notes: '',
            icon: require('../../assets/Images/LinkdIn.png')
        }
    ]

    if (localStorage.getItem('user Data') === null || 'undefined') {
        localStorage.setItem('user Data', JSON.stringify(data))
    }

    const previousData = JSON.parse(localStorage.getItem('user Data') || '[]')

    console.log(previousData)

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
                            <img src={require('../../assets/Images/add_btn.png')} alt="add" onClick={showModal} />
                        </div>
                    </div>
                </div>
                <div className="socialMedia">
                    <div className="socialMediaTitle">Social Media</div>
                    <div className="socialMediaCount">{previousData.length}</div>
                    <div className="socialMediaDropDown">
                        <img src={require('../../assets/Images/Path Copy.png')} alt="add" />
                    </div>
                </div>
            </div>
            <div className="homeBodyContainerBox">
                <div className="homeBodyContents">
                    {JSON.stringify(previousData) === '[]' ? (
                        <div className="homeBodyText">
                            <div>Please Click on the “+” symbol to add sites</div>
                        </div>) : (

                        <div className="cardContainer">
                            {previousData.map((ele: any) => {
                                return (
                                    <div key={ele.siteName} className="cardContents">
                                        <div className="cardUpper">
                                            <div className="cardLogo">
                                                {' '}
                                                {ele.icon !== '' ? (
                                                    <img src={ele.icon} alt="" />
                                                ) : (
                                                    <img
                                                        src={require('../../assets/logo.png')}
                                                        height="50px"
                                                        style={{
                                                            backgroundPosition: 'cover',
                                                            borderRadius: '50%',
                                                        }}
                                                    />
                                                )}
                                            </div>

                                            <div className="cardCopyTitle">
                                                <div className="cardTitle"> {ele.siteName}</div>
                                                <div className="cardCopy">
                                                    <img
                                                        src={require('../../assets/Images/copy.png')}
                                                        alt="copy"
                                                    />
                                                    <div>Copy Password</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cardLink">{ele.url}</div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                    }
                </div>
                {
                    modal &&
                    <>
                        {/* <Modal modelState={getModalState} /> */}
                        <div className="modal">
                            <div className="overlay" onClick={showModal}></div>
                            <div className="modal-content">
                                <form className="modalBodyForm" >
                                    <div className="modalInput occupy">
                                        <div>URL</div>
                                        <input type="text" name="url" className="modalInputBar"/>
                                    </div>
                                    <div className="modalInput">
                                        <div>Site Name</div>
                                        <input type="text" name="siteName" className="modalInputBar" />
                                    </div>
                                    <div className="modalInput">
                                        <div>Sector/Folder</div>
                                        <div className="paswordEyeContainer">
                                            <input type="text" name="sector" className="modalInputBar passwordEye" />
                                            <img src={require('../../assets/Images/Path Copy.png')} alt="eye" />
                                        </div>
                                    </div>
                                    <div className="modalInput">
                                        <div>User Name</div>
                                        <input type="text" name="userName" className="modalInputBar" value="userName" />
                                    </div>
                                    <div className="modalInput">
                                        <div>Site Password</div>
                                        <div className="paswordEyeContainer">
                                            <input type="text" name="sitePassword" className="modalInputBar passwordEye" value="sitePassword" />
                                            <img src={require('../../assets/Images/eye_on.png')} alt="eye" />
                                        </div>
                                    </div>
                                    <div className="modalInput occupy">
                                        <div>Notes</div>
                                        <textarea className="modalInputBar" name="notes" />
                                    </div>
                                </form>
                                <div className="modalButtons">
                                    <button className="modalButton modalResetButton">Reset</button>
                                    <button className="modalButton modalSaveButton" type="submit">
                                        Save
                                    </button>
                                </div>
                                <button className="close-modal" onClick={showModal} >
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default BodyHome