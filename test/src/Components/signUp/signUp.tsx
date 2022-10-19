import './signUp.css'
import { useState } from 'react'
import "../login/lock/lock.css"
import "../signUp/signUp.css"
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {

    type usersType = { mobileNo: number; mPin: number };
    const navigate = useNavigate();

    if (localStorage.getItem('users') === null) {
        localStorage.setItem(
            'user Data',
            JSON.stringify(
                localStorage.setItem(
                    'users',
                    JSON.stringify([
                        { mobileNo: '9036825554', mPin: '9036' },
                    ])
                )
            )
        );
    }

    const [togglePass, setTogglePass] = useState(false)

    const togglePassword = () => {
        setTogglePass(!togglePass)
    }

    const signUpHandler = (e: any) => {
        e.preventDefault();

        const mobileNo: number = e.target.mobileNo.value;
        const newMPin: number = e.target.mpin.value;
        const confirmMpin: number = e.target.confirmMPin.value;

        const userData = { mobileNo, mPin: newMPin };

        const previousData: usersType[] = JSON.parse(
            localStorage.getItem('users') || '[]'
        );

        console.log('userData', previousData);
        console.log('userData', { mobileNo, newMPin });
        if (previousData.length > 0 && mobileNo) {
            const mappedUser = previousData.map((user) => {
                if (user.mobileNo === mobileNo) {
                    return 'user';
                }
                return 'no user';
            });

            if (newMPin === confirmMpin) {
                if (mappedUser.includes('user')) {
                    alert('user already exist');
                } else if (mappedUser.includes('no user')) {
                    previousData.push(userData);
                    sessionStorage.setItem('signUpSuccess', 'true');
                    navigate('/');

                    localStorage.setItem(JSON.stringify(mobileNo), '[]');
                    window.location.reload();
                }
            } else {
                alert('mPin does not match');
            }

            console.log('pre', previousData);
            localStorage.setItem('users', JSON.stringify(previousData));
        } else if ((previousData.length = 0 && mobileNo)) {
        }
    };

    return (
        <div className="lockParent">
            <div className="LockDisplay ">
                <div className='lockBox'>
                    <div className="lockImage"><img src={require("../../assets/logo.png")} /></div>
                    <div className="lockMinImage"><img src={require("../../assets/Images/logo.png")} /></div>
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
                <div className='lockContainer'>
                    <div className="form">
                        <div className="signUp">
                            SIGN UP
                        </div>
                        <form className="formContainer" onSubmit={signUpHandler}>
                            <div className="mobile">
                                <label htmlFor="mobile">
                                    <input type="text" name="mobileNo" id="mobile" className="input" placeholder=" Mobile Number " />
                                </label>
                            </div>

                            <div className="mobile">
                                <input type="text" name="mpin" id="mobile" className="input" placeholder=" Enter 4 Digit MPin " />
                            </div>

                            <div className="mPin">
                                <input type={togglePass ? 'text' : 'password'} name="confirmMPin" id="mPin" className="input" placeholder="Re-Enter 4 Digit MPin" />
                                <img src={require("../../assets/eye_on.png")} alt="eye" className='toggleEye' onClick={togglePassword} />
                            </div>
                            <div className='bottomDisplay'>
                                <div className="button">
                                    <input type="submit" value="SIGN UP" className='signInText' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp