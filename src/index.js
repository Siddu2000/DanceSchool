import React, { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
// import Counter from './Counter'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
        {/* <Counter/> */}
    </StrictMode>
)