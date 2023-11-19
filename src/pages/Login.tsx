import "../styles/login.css";
import { useMemo, useState, useEffect } from "react";
import Button1 from "../components/buttons/Button1";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import OInput from "../components/inputs/OInput";
import Button2 from "../components/buttons/Button2";
import Mail from "../assets/icons/Mail";
import Password from "../assets/icons/Password";
import RightArrow from "../assets/icons/RightArrow";
import { emailRegex } from "../helper/regexConstants";
import { disabledBtnClr, enabledBtnClr } from "../helper/constants";
import { OutgoingLoginData } from "../types/AuthTypes";
import { useAppDispatch } from "../store";
import reducerServices from "../reducers/reducerServices";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmitEnabled, setIsSubmitEnabled] = useState<boolean>(false);

  const handleLoginClick = () => {
    navigate("/signup");
  };

  // returns true if not satisfying our conditions
  const emailError = useMemo(() => {
    return !emailRegex.test(emailId);
  }, [emailId]);
  const passwordError = useMemo(() => {
    return !(password.length > 8);
  }, [password]);

  useEffect(() => {
    if (emailError || passwordError) {
      setIsSubmitEnabled(false);
    } else {
      setIsSubmitEnabled(true);
    }
  }, [emailError, passwordError]);

  const loginButtonHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const finalData: OutgoingLoginData = {
      emailId,
      password,
    };
    const result = await dispatch(
      reducerServices.auth.postSignInThunk(finalData)
    );
    if (reducerServices.auth.postSignInThunk.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="login-main-container">
        <div className="login-left">
          <div className="login-logo-container">
            <img src={Logo} className="login-logo" />
          </div>
          <form className="login-field-container">
            <div className="login-welcome-container">
              <RightArrow />
              <h2 className="login-welcome-container">Welcome Back!</h2>
            </div>

            <div className="login-field-main-container">
              <div className="login-input-container">
                <OInput
                  placeholder="Email Id"
                  icon={<Mail />}
                  value={emailId}
                  inputType="email"
                  setValue={setEmailId}
                  errorConditions={emailError}
                />
              </div>

              <div className="login-input-container">
                <OInput
                  placeholder="Password"
                  icon={<Password />}
                  inputType="password"
                  value={password}
                  setValue={setPassword}
                  errorConditions={passwordError}
                />
              </div>

              <div className="login-button-container">
                <Button2
                  text="Log in"
                  backgroundColor={`${
                    !isSubmitEnabled ? disabledBtnClr : enabledBtnClr
                  }`}
                  fontColor="white"
                  disabled={!isSubmitEnabled}
                  onClick={loginButtonHandler}
                />
              </div>

              <div className="login-signup-link">
                <p>
                  Don't have an account?{" "}
                  <NavLink
                    to="/signup"
                    style={{ fontWeight: 500, color: "#339ae5" }}
                  >
                    Register
                  </NavLink>
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="login-right">
          <div className="login-right-login">
            <Button1 text="Register" onPress={handleLoginClick} />
          </div>
          <div className="login-right-image-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
