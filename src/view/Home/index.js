import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoUrl from './images/Logo@2x.png'
import shapeUrl from './images/Shape@2x.png'
import './index.scss'

const Home = () => {
  const history = useHistory()
  const signUp = () => { 
    history.push('/signUp')
  }
  return (
    <div className="home">
      <div className="h-header">
        <div className="header-logo">
          <img src={logoUrl} alt="header-logo"/>
        </div>
        <div className="header-title">
          <span>Huge Music Library</span>
        </div>
        <div className="header-feature">
          <img src={shapeUrl} alt="shape"/>
          <span>30 MILLION SONGS</span>
        </div>
      </div>
      <div className="h-middle">
        <div className="middle-title">Become a part our family</div>
        <div className="middle-signUp" onClick={signUp}>
          <button>Sign Up with Phone</button>
        </div>
      </div>
      <div className="h-footer">
        <span>I hava an Account</span>
      </div>
    </div>
  )
}

export default Home