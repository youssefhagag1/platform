import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';   // Theme
import 'primereact/resources/primereact.min.css';    
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { LogedProvider } from './Context/loged.jsx';
import { MeProvider } from './Context/Me.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LogedProvider>
       <MeProvider>
        <App/>
       </MeProvider>
      </LogedProvider>
    </BrowserRouter>
  </StrictMode>,
)
