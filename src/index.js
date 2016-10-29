import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
require("./sass/default.scss")

render(
    <App />,
    document.getElementById('root')
)