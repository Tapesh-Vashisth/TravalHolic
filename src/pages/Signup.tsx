import { useState, useMemo } from "react";
import "../styles/signup.css";
import Button1 from "../components/buttons/Button1";
import { NavLink, useNavigate } from "react-router-dom";
import SignupImage from "../assets/vectors/signup.svg";
import Logo from "../assets/logo.png";
import OInput from "../components/inputs/OInput";
import Button2 from "../components/buttons/Button2";
import Mail from "../assets/icons/Mail";
import User from "../assets/icons/User";
import Phone from "../assets/icons/Phone";
import Password from "../assets/icons/Password";
import { emailRegex, mobileRegex } from "../helper/regexConstants";

function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState<string>("");
  const [emailId, setEmailId] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginClick = () => {
    navigate("/login");
  };

  // the following are the conditions where the error must be displayed for the inputs
  const fullNameError = useMemo(() => {
    return fullName.trim().length === 0;
  }, [fullName]);
  const emailIdError = useMemo(() => {
    return !emailRegex.test(emailId);
  }, [emailId]);
  const mobileError = useMemo(() => {
    return !mobileRegex.test(mobileNumber);
  }, [mobileNumber]);
  const passwordError = useMemo(() => {
    return !(password.trim().length >= 8);
  }, [password]);

  return (
    <div className="signup-container">
      <div className="signup-main-container">
        <div className="signup-left">
          <div className="signup-logo-container">
            <img src={Logo} className="signup-logo" />
          </div>
          <form className="signup-field-container">
            <div className="signup-field-main-container">
              <div className="signup-input-container">
                <OInput
                  placeholder="Full Name"
                  icon={<User />}
                  inputType="text"
                  errorConditions={fullNameError}
                  value={fullName}
                  setValue={setFullName}
                />
              </div>
              <div className="signup-input-container">
                <OInput
                  placeholder="Email Id"
                  icon={<Mail />}
                  inputType="email"
                  value={emailId}
                  setValue={setEmailId}
                  errorConditions={emailIdError}
                />
              </div>
              <div className="signup-input-container">
                <OInput
                  placeholder="Mobile Number"
                  icon={<Phone />}
                  inputType="tel"
                  errorConditions={mobileError}
                  value={mobileNumber}
                  setValue={setMobileNumber}
                />
              </div>
              <div className="signup-input-container">
                <OInput
                  placeholder="Password"
                  icon={<Password />}
                  inputType="password"
                  errorConditions={passwordError}
                  value={password}
                  setValue={setPassword}
                />
              </div>

              <div className="signup-button-container">
                <Button2
                  text="Register"
                  backgroundColor="#339ae5"
                  fontColor="white"
                />
              </div>

              <div className="signup-login-link">
                <p>
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    style={{ fontWeight: 500, color: "#339ae5" }}
                  >
                    Login
                  </NavLink>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="signup-right">
          <div className="signup-right-login">
            <Button1 text="Login" onPress={handleLoginClick} />
          </div>
          <div className="signup-right-image-container">
            <img className="signup-right-image" src={SignupImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
