import React,{ Component } from "react"
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'



ReactDom.render(
  <Provider store={store}></Provider>
)