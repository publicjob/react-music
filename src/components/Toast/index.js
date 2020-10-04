import React, { Component, createRef } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import './iconfont.scss'
import { CSSTransition } from 'react-transition-group'

class Toast extends Component {
  state = {
    isShow: false
  }
  componentDidMount() {
    this.setState({
      isShow: this.props.isShow
    })
  }
  render() {
    return (
      <CSSTransition
        classNames="toast"
        timeout={1000}
        unmountOnExit={true}
        in={this.state.isShow}
      >
        <div className="toast">
          <i className={`iconfont ${ this.props.type === 'success' ? 'icon-caozuochenggong' : 'icon-shibai' }`}></i>
          <span>{this.props.text}</span>
        </div>
      </CSSTransition>
    )
  }
}

const ToastComponent = function () {
  const ToastRef = createRef()
  const success = (text) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Toast ref={ToastRef} isShow={true} text={text} type="success"/>, container)
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(container)
      document.body.removeChild(container)
    }, 3000)
  }
  const error = (text) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Toast ref={ToastRef} isShow={true} text={text} type="error"/>, container)
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(container)
      document.body.removeChild(container)
    }, 3000)
  }
  return {
    success,
    error
  }
}()

export default ToastComponent