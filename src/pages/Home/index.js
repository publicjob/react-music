import React from 'react'
import logoUrl from './images/Logo@2x.png'
import './index.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="h-header">
        <div className="header-logo">
          <img src={logoUrl} alt="header-logo"/>
        </div>
        <div className="header-title"></div>
        <div className="header-feature"></div>
      </div>
      <div className="h-middle"></div>
      <div className="h-footer"></div>
    </div>
  )
}

export default Home