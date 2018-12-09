import React,{ Component } from "react"
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'


import Main from "./Main/Main";

ReactDom.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  document.getElementById('root')
)