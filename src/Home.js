import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar'

export default function Home() {

    const containerStyle = {
        textAlign: 'center',
        paddingTop: '10%',
        color: 'rgb(11, 11, 105)',
        fontSize: '300%'
    }

    const h3Style = {
        textAlign: 'center',
        color: 'rgb(11, 11, 105)',
        fontSize: '200%'
    }

    const paragraphStyle = {
        textAlign: 'center',
        color: 'rgb(11, 11, 105)',
    }

    const buttonStyle = {
        textAlign: 'center',
        border: 'solid',
        borderWidth: '1px',
        backgroundColor: '#005dff',
        borderRadius:'15px',
        padding: '5px 10px',
        color: 'white'
        
    }

    const center = {
        padding: '5% 0'
    }

    const centerButton = {
        textAlign: 'center'
    }

    const homeStyle = {
        paddingTop:'10% 0'
    }

    const handleSubmit= () => {
        navigate('')
    }

    const navigate = useNavigate()

    return(
        <body>
            <div>
                <Navbar></Navbar>
            </div>
            <div style={homeStyle}>
                <div>
                    <h1 style={containerStyle}>Welcome to Consumer I.Q.!</h1>
                </div>
                <div>
                    <h3 style={h3Style}>Test your knowledge of your Consumer Rights</h3>
                </div> 
                <div style={center}>
                    <p  style={paragraphStyle}>Are you ready to be informed?</p>
                    <div style={centerButton} >
                    <Link style={buttonStyle} to='test' onClick={e => handleSubmit()} className="btn btn-success" >Take Test</Link>
                    </div>
                </div>
            </div>
        </body>
    )
}