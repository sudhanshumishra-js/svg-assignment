import React from 'react'
import { AuthContext } from '../../context/AuthContext'
import "./Profile.style.css"
const Profile = () => {
    const { logout, authState } = React.useContext(AuthContext)
    return (
        <main className='parent'>
            <section >
                <div className='container'>
                    <div className='profile__div'>
                        <div className='profile__username__div'> <span>Username</span> <span>{authState.userName}</span> </div>
                        <button onClick={() => logout()} type="button" className='profile__username__button'>Logout</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Profile