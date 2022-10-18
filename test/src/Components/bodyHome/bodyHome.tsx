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
            siteName: 'Linkdin',
            url: 'www.linkdin.com',
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
                    <div className="socialMediaCount">07</div>
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
                                <h2>Hello Modal</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                                    perferendis suscipit officia recusandae, eveniet quaerat assumenda
                                    id fugit, dignissimos maxime non natus placeat illo iusto!
                                    Sapiente dolorum id maiores dolores? Illum pariatur possimus
                                    quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                                    placeat tempora vitae enim incidunt porro fuga ea.
                                </p>
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