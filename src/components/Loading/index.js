import React from 'react'
import loadingUrl from './images/loading.gif'
import './index.scss'

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingUrl} alt="loading"/>
    </div>
  )
}

export default Loading