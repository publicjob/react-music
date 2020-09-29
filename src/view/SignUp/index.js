import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import arrowUrl from './images/Arrow-Down@2x.png'
import userUrl from './images/User@2x.png'
import Toast from 'components/Toast'
import './index.scss'

const SignUp = () => {
  const history = useHistory()
  const backHome = () => {
    history.push('/')
  }
  const sendCaptcha = (e) => {
    e.preventDefault()
    Toast.info("Verification code sent successfully!")
    console.log('验证码发送成功')
  }
  const signUp = () => {
    // const url = `http://localhost:3000/captcha/sent?phone=13556121070`
    // fetch(url).then(res => res.json()).then(res => console.log(res)
   
  }
  return (
  <div className="signUp">
    <div className="s-header">
      <div className="header-back" onClick={backHome}>
        <img src={arrowUrl} alt="arrow-down"/>
      </div>
      <div className="header-info">
        <div className="info-logo">
          <img src={userUrl} alt="user-logo"/>
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
        <form>
          <div className="form-item">
            <label>Nickname</label>
            <input/>
          </div>
          <div className="form-item">
            <label>Phone</label>
            <input/>
          </div>
          <div className="form-item">
            <label>Password</label>
            <input/>
          </div>
          <div className="form-item">
            <button onClick={sendCaptcha}>send captcha</button>
            <input className="captcha-text"/>
          </div>
        </form>
      </div>
      <div className="middle-button" onClick={signUp}>
        <button>Sign Up</button>
      </div>
    </div>
  </div>
  )
}

export default SignUp