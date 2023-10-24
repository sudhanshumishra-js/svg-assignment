import React from 'react'
import { useNavigate } from 'react-router-dom';

const GameCards = ({ name, author, timeStamp, id, url }) => {
    const navigate = useNavigate()
    const handleCardClick = (id) => {
        navigate(`/game/${id}`);
    };
    return (
        <div className='game__card' style={{ border: '1px solid black' }} onClick={() => handleCardClick(id)}
        >
            <div>{name}</div>
            <div>{author}</div>
        </div>
    )
}

export default GameCards