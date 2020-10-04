import Axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import arrowUrl from './images/Arrow-Down@2x.png'
import userUrl from './images/User@2x.png'
import Toast from 'components/Toast'
import Mask from 'components/Mask'
import SignUpService from 'service/SignUp'
import './index.scss'

const SignUp = () => {
  const formRef = useRef()
  const nicknameRef = useRef()
  const phoneRef = useRef()
  const passwordRef = useRef()
  const captchaRef = useRef()
  const history = useHistory()
  const [isSignUp, setSignUp] = useState(false)
  const [isDisabled, setDisabled] = useState(false)
  const backHome = () => {
    history.push('/')
  }
  const sendCaptcha = (event) => {
    event.preventDefault()
    event.stopPropagation()
    // setDisabled(true)
    console.log(formRef.current.nickname.value)
    console.log(formRef.current.password.value)
    console.log(formRef.current.phone.value)
    Toast.success('Captcha sent successfully!')
  }
  const signUp = (event) => {
    event.preventDefault()
  }
  return (
    <div className="signUp">
      <div className="s-header">
        <div className="header-back" onClick={backHome}>
          <img src={arrowUrl} alt="arrow-down" />
        </div>
        <div className="header-info">
          <div className="info-logo">
            <img src={userUrl} alt="user-logo" />
          </div>
          <div className="info-title">
            <span>Create</span>
            <span>an Account</span>
          </div>
          <div className="info-brief">
            <span>300K+ people already listen music with our app.</span>
          </div>
        </div>
      </div>
      <div className="s-middle">
        <div className="middle-form">
          <form  onSubmit={signUp} ref={formRef}>
            <div className="form-item">
              <label className="item-title">Nickname:</label>
              <input type="text" className="nickname" name="nickname"/>
            </div>
            <div className="form-item">
              <label className="item-title">Password:</label>
              <input type="text" name="password"/>
            </div>
            <div className="form-item">
              <label className="item-title">Phone:</label>
              <input type="text" name="phone"/>
            </div>
            <div className="form-item">
              <button onClick={sendCaptcha} disabled={isDisabled} className={`${isDisabled ? 'button-disabled' : ''}`}>send captcha</button>
              <input className="captcha-text" ref={captchaRef} type="text"/>
            </div>
            <div className="form-button">
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      { isSignUp && <Mask/> }
    </div>
  )
}

export default SignUp