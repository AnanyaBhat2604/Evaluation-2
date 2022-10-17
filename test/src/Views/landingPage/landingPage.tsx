import Lock from "../../Components/login/lock/lock"
// import { Routes, Route } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import '../../Components/login/lockInput/lockInput.css';
import SignUp from "../../Components/signUp/signUp"

const LandingPage = () => {
    return (
        <div><Routes>
        <Route path="/" element={<Lock />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes></div>
    )
}

export default LandingPage