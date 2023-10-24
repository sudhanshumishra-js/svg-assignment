import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/images/svg-logo.png"
import { CgProfile } from "react-icons/cg"
const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <header className='container'>
                <nav >
                    <img src={logo} alt="main_logo" onClick={() => navigate("/")} className="header__logo" />
                    <CgProfile onClick={() => navigate("/profile")} size="2em" color="gray" cursor="pointer" />
                </nav>
            </header>
        </>
    )
}

export default Header