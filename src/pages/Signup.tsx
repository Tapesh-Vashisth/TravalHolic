import "../styles/signup.css";
import Button1 from '../components/buttons/Button1';
import {NavLink, useNavigate} from "react-router-dom";
import SignupImage from "../assets/vectors/signup.svg"
import Logo from "../assets/logo.png";
import Input1 from "../components/inputs/Input1";
import Button2 from "../components/buttons/Button2";
import Mail from "../assets/icons/Mail";
import User from "../assets/icons/User";
import Phone from "../assets/icons/Phone";
import Password from "../assets/icons/Password";


function Signup() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    }

    return (
        <div className='signup-container'>
            <div className='signup-main-container'>
                <div className='signup-left'>
                    <div className='signup-logo-container'>
                        <img src={Logo} className="signup-logo" />
                    </div>
                    <form className="signup-field-container">
                        <div className="signup-field-main-container">
                            <div className="signup-input-container">
                                <Input1 placeholder="Full Name" icon={<User />} />
                            </div>
                            <div className="signup-input-container">
                                <Input1 placeholder="Email Id" icon={<Mail />} />
                            </div>
                            <div className="signup-input-container">
                                <Input1 placeholder="Mobile Number" icon={<Phone />} />
                            </div>
                            <div className="signup-input-container">
                                <Input1 placeholder="Password" icon={<Password />} />
                            </div>

                            <div className="signup-button-container">
                                <Button2 text="Register" backgroundColor="#339ae5" fontColor="white" />
                            </div>

                            <div className="signup-login-link">
                              <p>Already have an account? <NavLink to="/login" style={{fontWeight: 500, color: "#339ae5"}}>Login</NavLink></p>                              
                            </div>
                        </div>
                    </form>
                </div>
                <div className='signup-right'>
                    <div className='signup-right-login'>
                        <Button1 text="Login" onPress={handleLoginClick} />
                    </div>
                    <div className="signup-right-image-container">
                        <img className="signup-right-image" src={SignupImage} />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Signup;
