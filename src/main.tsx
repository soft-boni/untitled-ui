import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/colors.css'
import './styles/typography.css'
import './styles/effects.css'
import './styles/numbers.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
