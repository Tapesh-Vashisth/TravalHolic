import "../styles/login.css";
import Button1 from '../components/buttons/Button1';
import {NavLink, useNavigate} from "react-router-dom";
import LoginImage from "../assets/login.jpg"
import Logo from "../assets/logo.png";
import Input1 from "../components/inputs/Input1";
import Button2 from "../components/buttons/Button2";
import Mail from "../assets/icons/Mail";
import Password from "../assets/icons/Password";
import RightArrow from "../assets/icons/RightArrow";


function Signup() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/signup");
    }

    return (
        <div className='login-container'>
            <div className='login-main-container'>
                <div className='login-left'>
                    <div className='login-logo-container'>
                        <img src={Logo} className="login-logo" />
                    </div>
                    <form className="login-field-container">
                        <div className="login-welcome-container">
                          <RightArrow />
                          <h2 className="login-welcome-container">Welcome</h2>
                        </div>
                        
                        <div className="login-field-main-container">
                            <div className="login-input-container">
                                <Input1 placeholder="Email Id" icon={<Mail />} />
                            </div>

                            <div className="login-input-container">
                                <Input1 placeholder="Password" icon={<Password />} />
                            </div>

                            <div className="login-button-container">
                                <Button2 text="Log in" backgroundColor="#339ae5" fontColor="white" />
                            </div>

                            <div className="login-signup-link">
                              <p>Don't have an account? <NavLink to="/signup" style={{fontWeight: 500, color: "#339ae5"}}>Register</NavLink></p>                              
                            </div>
                        </div>
                    </form>
                </div>
                <div className='login-right'>
                    <div className='login-right-login'>
                        <Button1 text="Register" onPress={handleLoginClick} />
                    </div>
                    <div className="login-right-image-container"></div>
                </div> 
            </div>
        </div>
    )
}

export default Signup;