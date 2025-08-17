import React, { useContext } from 'react';
import Styles from "./Login.module.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import google_icon from "../../../assets/images/google.png";
import MotivationalSection from '../../Motivation/MotivationalSection';
import axios from 'axios';
import { LogedContext } from '../../../Context/loged';

function Login() {
  const { setIsLogedIn } = useContext(LogedContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";

  const navigate = useNavigate();
  const base_url = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const formData = new FormData();
    formData.append("email" , email);
    formData.append("password" , password);

    try {
      const res = await axios.post(`${base_url}/login`, formData);
      localStorage.setItem("token", res.data.token);
      setIsLogedIn(true);
      navigate(from, { replace: true }); 
    } catch(err) {
      console.log(err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await axios.get(`${base_url}/auth/google`);
      if(res.data.url) {
        window.location.href = res.data.url; 
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={Styles.container}>
      <MotivationalSection />
      
      <div className={Styles.loginSection}>
        <div className={Styles.loginBox}>
          <h2 className={Styles.loginTitle}>Welcome Back!</h2>
          
          <form className={Styles.loginForm} onSubmit={handleSubmit}>
            <div className={Styles.formGroup}>
              <label htmlFor="email" className={Styles.formLabel}>Email</label>
              <input 
                type="email" 
                id="email" 
                required
                name='email'
                className={Styles.formInput} 
                placeholder="student@example.com"
              />
            </div>
            
            <div className={Styles.formGroup}>
              <label htmlFor="password" className={Styles.formLabel}>Password</label>
              <input 
                type="password" 
                required
                id="password" 
                name='password'
                className={Styles.formInput} 
                placeholder="Enter your password"
              />
            </div>
            
            <button type="submit" className={Styles.loginButton}>Login</button>
            
            <div className={Styles.socialLogin}>
              <p>Or login with</p>
              <div className={Styles.socialIcons}>
                <button 
                  type="button" 
                  className={Styles.socialButton} 
                  onClick={handleGoogleLogin}
                >
                  <Image src={google_icon} alt='Google icon'/>
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>
            
            <p className={Styles.signupText}>
              New to our platform? <Link to="/register">Create account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
