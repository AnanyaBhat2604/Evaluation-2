import Lock from './Components/login/lock/lock';
import "./style.css"
import SignUp from './Components/signUp/signUp';
import Toast from './Components/toast/toast';
import LandingPage from './Views/landingPage/landingPage';
import LockInput from './Components/login/lockInput/lockInput';
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <LandingPage />
    </div>
  );
}

export default App;
