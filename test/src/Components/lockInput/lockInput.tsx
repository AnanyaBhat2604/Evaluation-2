import './lockInput.css'

const LockInput = () => {
    return (
        <div className='lockContainer'>
            <div className="form">
                <div className="signIn">
                    SIGN IN TO YOUR ACCOUNT
                </div>
                <form className="formContainer">
                    <div className="mobile">
                        <label htmlFor="mobile">
                            <input type="text" name="mobile" id="mobile" className="input" placeholder=" Mobile Number " />
                        </label>
                    </div>
                    <div className="mPin">
                        <label htmlFor="mPin">
                            <input type="password" name="mPin" id="mPin" className="input" placeholder="MPin" />
                        </label>
                    </div>
                    <div className='bottomDisplay'>
                        <div className="ForgotPassword">
                            Forgot your Password?
                        </div>
                        <div className="button">
                            <input type="submit" value="SIGN IN" className='signInText'/>
                        </div>
                        <div className="reg">Don't have a Account? SIGN UP</div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LockInput