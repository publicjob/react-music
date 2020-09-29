import Axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import arrowUrl from './images/Arrow-Down@2x.png'
import userUrl from './images/User@2x.png'
import Toast from 'components/Toast'
import './index.scss'
import validate from 'util/validate'

const SignUp = () => {
  const nicknameRef = useRef()
  const phoneRef = useRef()
  const passwordRef = useRef()
  const captchaRef = useRef()
  const history = useHistory()
  const backHome = () => {
    history.push('/')
  }
  const validateIsSignUp = (e) => {
    console.log(e.target.value)
  }
  const sendCaptcha = (e) => {
    e.preventDefault()
    Toast.info("Verification code sent successfully!")
    console.log(typeof phoneRef.current.value)
    console.log('验证码发送成功')
    // const url = `http://localhost:3000/captcha/sent?phone=13556121070`
    // fetch(url).then(res => res.json()).then(res => console.log(res)
  }
  const signUp = (e) => {
    e.preventDefault()
    console.log(e.target)
    console.log(nicknameRef.current.value)
    console.log(phoneRef.current.value)
    console.log(passwordRef.current.value)
    console.log(captchaRef.current.value)

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
          <form  onSubmit={signUp}>
            <div className="form-item">
              <label>Nickname</label>
              <input  ref={nicknameRef} type="text"/>
            </div>
            <div className="form-item">
              <label>Phone</label>
              <input ref={phoneRef} type="text" onBlur={validateIsSignUp}/>
            </div>
            <div className="form-item">
              <label>Password</label>
              <input ref={passwordRef} type="text"/>
            </div>
            <div className="form-item">
              <button onClick={sendCaptcha}>send captcha</button>
              <input className="captcha-text" ref={captchaRef} type="text"/>
            </div>
            <div className="form-button">
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp