import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
// i have no idea why we need to get rid of the curly braces around PrimaryProvider :'(
  
import PrimaryProvider  from './context/PrimaryContext.jsx'

// Imported PrimaryProvider and wrapped App component with PrimaryProvider
// so now App component & its children & (other descendants) can use its related context

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimaryProvider>
        <App />
      </PrimaryProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
