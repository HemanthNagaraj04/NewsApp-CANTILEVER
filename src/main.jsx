import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-k80fvvp0mlkpmzym.eu.auth0.com"
    clientId="3mszoovSkTbnAFRX7yRoZC2gXUDgqAgt"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    <ToastContainer
      position="top-center"
    />

  </Auth0Provider>
)
