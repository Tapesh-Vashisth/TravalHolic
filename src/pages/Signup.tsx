import "../styles/signup.css";
import Button1 from '../components/buttons/Button1';
import {useNavigate} from "react-router-dom";


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
                        <p>logo</p>
                    </div>
                    <p>left</p>
                </div>
                <div className='signup-right'>
                    <div className='signup-right-login'>
                        <Button1 text="Login" onPress={handleLoginClick} />
                    </div>
                    <div>
                        <p>image</p>
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
// nationality
// country of residence  
// password 