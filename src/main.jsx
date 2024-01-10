import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyRoutes from './routes';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Navbar/>
    <MyRoutes/>
    <App />
    <Footer />
    </BrowserRouter>
)
