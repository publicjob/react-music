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
  const nicknameRef = useRef()
  const phoneRef = useRef()
  const passwordRef = useRef()
  const captchaRef = useRef()
  const history = useHistory()
  const [isSignUp, setSignUp] = useState(false)

  const backHome = () => {
    history.push('/')
  }
  const validateIsSignUp = (e) => {
    console.log(e.target.value)
  }
  const sendCaptcha = (event) => {
    event.preventDefault()
    event.stopPropagation()
    Toast.success("Verification code sent successfully!")
    SignUpService.sendCaptcha(14754553378).then(response => {
      
      console.log(response)
    }).catch(error => {

    })
    
  }
  const signUp = (event) => {
    event.preventDefault()
    SignUpService.useRequestInterceptors(config => {
      setSignUp(true)
      return config
    })
    SignUpService.register().then(response => {
      setSignUp(false)
    }).catch(error => {
      setTimeout(_ => {
         setSignUp(false)
         Toast.error('request error！please try again!')
      }, 5000)
    })
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
      { isSignUp && <Mask/> }
    </div>
  )
}

export default SignUp