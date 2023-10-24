import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./GameCards.style.css"
const GameCards = ({ name, author, timeStamp, id, url }) => {
    const navigate = useNavigate()
    const handleCardClick = (id) => {
        navigate(`/game/${id}`);
    };
    return (
        <div className='game__card' onClick={() => handleCardClick(id)}
        >
            <div className='game__card__top'>
                <span className='game__card__top-name'>{name}</span>
            </div>
            <div className='game__card__bottom'>
                <div className='game__card__bottom-div'>
                    <span>Author: </span> <span>{author}</span>
                </div>
                <div className='game__card__bottom-div'>
                    <span>URL:</span> <span>{url}</span>
                </div>
                <div className='game__card__bottom-div'>
                    <span>Last Updated: </span> <span>{timeStamp}</span>
                </div>
            </div>
        </div>
    )
}

export default GameCards