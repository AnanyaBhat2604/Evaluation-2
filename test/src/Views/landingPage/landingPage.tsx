import Lock from "../../Components/login/lock/lock";
import { Routes, Route, Link } from "react-router-dom";
import '../../Components/login/lockInput/lockInput.css';
import SignUp from "../../Components/signUp/signUp"
import HomePage from "../homePage/homePage";

const LandingPage = () => {
    return (
        <div><Routes>
        <Route path="/" element={<Lock />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/*" element={<Lock />} />
      </Routes></div>
    )
}

export default LandingPage