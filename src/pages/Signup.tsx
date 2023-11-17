import "../styles/signup.css";
import Button1 from '../components/buttons/Button1';
import {useNavigate} from "react-router-dom";
import SignupImage from "../assets/vectors/signup.svg"
import Logo from "../assets/logo.png";
import Input1 from "../components/inputs/input1";


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
                    <div>
                        <div>
                            <Input1 />
                        </div>
                        <div>
                            <Input1 />
                        </div>
                        <div>
                            <Input1 />
                        </div>
                        <div>
                            <Input1 />
                        </div>
                    </div>
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


// first name 
// last name 
// emailid 
// mobile number   
// password 