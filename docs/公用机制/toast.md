* 设计一个Toast组件用来提示验证码发送成功
  1.根据所给消息弹出提示框，根据所给持续时间销毁提示框
  2.需要使用函数的形式调用，例如Toast.info('消息提示', 1000)

* 发送验证码的时候，总是需要点击两次才会弹出提示框 

*Function组件没法用createRef()创建一个DOM引用