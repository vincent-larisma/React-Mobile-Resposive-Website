import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//Styles
import './Styles/styles.scss'
import 'bulma'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
