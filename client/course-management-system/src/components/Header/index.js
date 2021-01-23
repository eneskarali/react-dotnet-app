import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={'header'}>

            <div className="container">
                <div className="logo">
                    <Link className="mainHead" to='/'><h2 >Course Management System</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default Header