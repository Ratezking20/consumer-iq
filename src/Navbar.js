import React, { Fragment } from "react";
import './Navbar.css';
import Home from "./Home";
import { Link, useNavigate} from 'react-router-dom';
import Donations from "./Donations";

export default function Navbar(){
    return(
        <Fragment>
        <header class="header">
		    <h1 class="logo"><Link to='/' >ConsumerIQ</Link></h1>
                <ul class="main-nav">
                    <li><a href="./Donations">Donate</a></li>
                </ul>
	    </header>
        </Fragment>

    )
}