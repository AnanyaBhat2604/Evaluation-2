import './lockInput.css'
import { Link, useNavigate } from "react-router-dom"
import Toast from "../../toast/toast"
import { useState } from 'react'

const LockInput = () => {

    const navigate = useNavigate();
    const [togglePass, setTogglePass] = useState(false);

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

    const togglePassword = () => {
        setTogglePass(!togglePass)
    }

    const loginHandler = (e: any) => {
        e.preventDefault();
        type usersType = { mobileNo: number; mPin: number };

        const mobileNo = e.target.mobileNo.value;
        const mPin = e.target.mPin.value;

        const userData = { mobileNo, mPin };
        console.log('userData', userData);

        const users: usersType[] = JSON.parse(
            localStorage.getItem('users') || '[]'
        );
        console.log('users', users);

        for (let i = 0; i < users.length; i++) {
            if (userData.mobileNo === users[i].mobileNo) {
                if (userData.mPin === users[i].mPin) {
                    navigate('/home');
                    localStorage.setItem('currentUser', mobileNo);
                    window.location.reload();
                }
            }
        }
    };

    return (
        <div className='lockContainer'>
            <div className="form">
                <div className="signIn">
                    SIGN IN TO YOUR ACCOUNT
                </div>
                <form className="formContainer" onSubmit={loginHandler}>
                    <div className="mobile">
                        <label htmlFor="mobile">
                            <input type="text" name="mobileNo" id="mobile" className="input" placeholder=" Mobile Number " />
                        </label>
                    </div>
                    <div className="mPin">
                        <input type={togglePass ? 'text' : 'password'} name="mPin" id="mPin" className="input" placeholder="MPin" minLength={4}

                            maxLength={4} />
                        <img src={require("../../../assets/eye_on.png")} alt="eye" className='toggleEye' onClick={togglePassword} />
                    </div>
                    <div className='bottomDisplay'>
                        <div className="ForgotPassword">
                            Forgot your Password?
                        </div>
                        <div className="button">
                            <input type="submit" value="SIGN IN" className='signInText' />
                        </div>
                        <div className="reg">Don't have a Account? <Link to="/signUp" className="link">SIGN UP</Link></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LockInput