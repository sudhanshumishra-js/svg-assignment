import React from 'react'
import { AuthContext } from '../../context/AuthContext'

const Profile = () => {
    const { logout, authState } = React.useContext(AuthContext)
    return (
        <main className='parent'>
            <section >
                <div className='container'>
                    <div>{authState.userName}</div>
                    <button onClick={() => logout()} type="button">Logout</button>
                </div>
            </section>
        </main>
    )
}

export default Profile