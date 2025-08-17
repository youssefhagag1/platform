import React, { useRef, useState , useContext } from 'react';
import Styles from "./Register.module.css";
import MotivationalSection from '../../Motivation/MotivationalSection';
import { Container } from 'react-bootstrap';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LogedContext } from '../../../Context/loged';

function Register() {
    const { setIsLogedIn } = useContext(LogedContext);
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const phoneRef = useRef(null);
  const dateRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);
  const [step , setStep] = useState(1);
    const genders = ['male' , 'female'];
  const [formData , setFormData]= useState({
    name : '',
    email :'',
    gender : '',
    phone : '' ,
    password : '',
    password_confirmation : '' ,
    birthdate : '',
  })
  const base_url = import.meta.env.VITE_API_BASE_URL;
const handleSubmit =  (e) => {
    e.preventDefault();
  };
  const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1);
  const day = String(d.getDate());
  return `${year}-${month}-${day}`;
};

const sendData = async () => {
  try {
    const payload = {
      ...formData,
      birthdate: formatDate(formData.birthdate), 
    };

    const res = await axios.post(`${base_url}/register`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    console.log('Registration success:', res.data);
    localStorage.setItem("token" , res.data.token);
    setIsLogedIn(true);
    navigate("/profile");
  } catch (err) {
    console.error('Registration error:', err.response?.data || err.message);
  }
};

const next = () => {
  if(step === 1){

    if(!formData.name){
      nameRef.current.classList.remove("invisible");
      nameRef.current.classList.add(Styles.required);
      return
    }
    if(!formData.email){
      emailRef.current.classList.remove("invisible");
      emailRef.current.classList.add(Styles.required);

      return
    }
    if(!formData.gender){
      genderRef.current.classList.remove("invisible");
      genderRef.current.classList.add(Styles.required);

      return
    }
    if(!formData.phone){
      phoneRef.current.classList.remove("invisible");
       phoneRef.current.classList.add(Styles.required);

      return
    }

  }
  else if(step === 2) {
    console.log(formData.birthdate)
    if(!formData.birthdate){
      dateRef.current.classList.remove("invisible");
       dateRef.current.classList.add(Styles.required);
       return
    }
  }
  else {
    if(formData.password.length < 6) {
       passwordRef.current.classList.remove("invisible");
       passwordRef.current.classList.add(Styles.required);
       return
    }

    else if(formData.password_confirmation !== formData.password || !formData.password_confirmation) {
       passwordConfirmationRef.current.classList.remove("invisible");
       passwordConfirmationRef.current.classList.add(Styles.required);
       return
    }
else {
  sendData();
}

  }
  
  if(step !== 3) {
    setStep(prev => prev + 1);
  }
}
  const showInputs = () => {
    switch(step){
      case 1 :
        return(
          <>
          <div>
            <label htmlFor="name" name="name">Name</label>
            <input 
              type="text"
              value={formData.name}
              placeholder='Enter Full Name'
              onChange={(e) =>setFormData({...formData , name : e.target.value})}
              />
              <div ref={nameRef} className={`invisible text-danger mt-2 ${Styles.err}`}>name is required</div>
          </div>
          <div>
            <label htmlFor="email" name="email">Email</label>
            <input
              type="email"
              value={formData.email}
              required
              placeholder='example@info.com'
              onChange={(e) =>setFormData({...formData , email : e.target.value})}
              />
             <div ref={emailRef} className={`invisible text-danger mt-2 ${Styles.err}`}>Email is required</div>
          </div>
          <div>
            <label htmlFor="gender" name="gender">Gender</label>

            <Dropdown  value={formData.gender} onChange={(e) => setFormData({...formData , gender : e.value})} options={genders} optionLabel="name" 
                placeholder="Select a Gender" className={`w-100 ${Styles.gender}`} />
        
             <div ref={genderRef} className={`invisible text-danger mt-2 ${Styles.err}`}>Gender is required</div>
          </div>
          <div>
            <label htmlFor="phone" name="phone">Phone</label>
            <input
            type="text"
            value={formData.phone}
            placeholder='Enter Full Name'
            onChange={(e) => setFormData({...formData , phone : e.target.value})}
            />
            <div ref={phoneRef} className={`invisible text-danger mt-2 ${Styles.err}`}>Phone is required</div>

          </div>
          <button onClick={next} className={`d-block ms-auto mt-4 ${Styles.next}`}>Next</button>
          </>
        )
        case 2 :
          return (
            <div>
           
            <Calendar value={formData.birthdate} onChange={(e) => setFormData({...formData , birthdate : e.value})} inline showWeek className='w-100 h-100' />
             <div ref={dateRef} className={`invisible text-danger my-2  ${Styles.err}`}>Birth Date is required</div>

            <div className='d-flex justify-content-between'>
              <button onClick={() => {setStep(step - 1 )}} className={`d-block   ${Styles.back}`}>Back</button>
              <button onClick={next} className={`d-block   ${Styles.next}`}>Next</button>
            </div>

            </div>
          )
        case 3 : 
        return(
          <>
            <div>
                <label htmlFor="password" name="passwrod">Password</label>
                  <Password placeholder='Min 6 digits' value={formData.password} onChange={(e) => setFormData({...formData , password : e.target.value})} toggleMask />
              <div ref={passwordRef} className={`invisible text-danger mb-2 ${Styles.err}`}>Password must be 6 digits or more</div>
            </div>
            <div>
                <label htmlFor="passwordConfirmation" name="passwordConfirmation">Confirm Password</label>
                  <Password placeholder='Confirm Password' value={formData.password_confirmation} onChange={(e) => setFormData({...formData , password_confirmation : e.target.value})} feedback={false} toggleMask />
              <div ref={passwordConfirmationRef} className={`invisible text-danger mb-4 ${Styles.err}`}>  Missmatched</div>
            </div>
             <div className='d-flex  justify-content-between'>
              <button onClick={() => {setStep(step - 1 )}} className={`d-block   ${Styles.back}`}>Back</button>
              <button onClick={next} className={`d-block   ${Styles.signUp}`}>Sign up</button>
            </div>
          </>
        )
    }
  }
  return(
    <div className={Styles.register}>
    <MotivationalSection/>

       <Container className={`d-flex align-items-center justify-content-center  ${Styles.container}`}>
              <form action="" className={Styles.registerForm} onSubmit={handleSubmit} >
                <p className={`display-6 fw-bold text-center mb-5 mt-3 ${Styles.head}`}>Welcome in Etrain</p>
              {
                showInputs()
              }
              </form>
              <div className={Styles.bullets}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
             
        </Container>


    </div>
  )
}

export default Register;