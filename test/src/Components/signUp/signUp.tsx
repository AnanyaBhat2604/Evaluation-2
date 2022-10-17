import './signUp.css'

const SignUp = () => {
  return (
    <div>
        <div className='lockContainer'>
            <div className="form">
                <div className="signUp">
                    SIGN UP
                </div>
                <form className="formContainer">
                    <div className="mobile">
                        <label htmlFor="mobile">
                            <input type="text" name="mobile" id="mobile" className="input" placeholder=" Mobile Number " />
                        </label>
                    </div>

                    <div className="mobile">
                            <input type="text" name="mobile" id="mobile" className="input" placeholder=" Enter 4 Digit MPin " />
                    </div>
                    
                    <div className="mPin">
                        
                            <input type="password" name="mPin" id="mPin" className="input" placeholder="Re-Enter 4 Digit MPin" />
                            {/* <img src={require("../../assets/eye_on.png")} alt="eye" className='toggleEye' /> */}
                    </div>
                    <div className='bottomDisplay'> 
                        <div className="button">
                            <input type="submit" value="SIGN UP" className='signInText'/>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp