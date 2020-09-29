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
          <i className="iconfont icon-caozuochenggong"></i>
          <span>{this.props.text}</span>
        </div>
      </CSSTransition>
    )
  }
}


const ToastComponent = function () {
  const ToastRef = createRef()
  let count = 0
  const info = (text) => {
    console.log(count++)
    const container = document.createElement('container')
    document.body.appendChild(container)
    ReactDOM.render(<Toast ref={ToastRef} isShow={true} text={text} />, container)
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(container)
      document.body.removeChild(container)
    }, 2000)
  }
  return {
    info
  }
}()

export default ToastComponent