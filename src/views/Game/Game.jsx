import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GameContext } from '../../context/GameContext';
import "./Game.style.css";

const Game = () => {
    const { gameState, updateGame, deleteGame } = useContext(GameContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        author: '',
        url: '',
        timeStamp: '',
    });

    useEffect(() => {
        const game = gameState.find(game => game.id === id);
        if (game) {
            setFormData(game);
        }
    }, [gameState, id]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedGame = {
            ...formData,
            timeStamp: new Date().toISOString().slice(0, 19).replace('T', ' ')

        };
        updateGame(id, updatedGame);
        navigate('/dashboard');
    };

    const handleDelete = () => {
        deleteGame(id);
        navigate('/dashboard');
    };


    return (
        <main className='parent'>
            <section className='game__container'>
                <div className='container'>
                    <form className='game__form' onSubmit={handleFormSubmit} >
                        <div className='game__form-group'>
                            <label className='game__label'>Name:</label>
                            <input
                                className='game__input'
                                type='text'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className='game__form-group'>
                            <label className='game__label'>Author:</label>
                            <input
                                className='game__input'
                                type='text'
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            />
                        </div>
                        <div className='game__form-group'>
                            <label className='game__label'>URL:</label>
                            <input
                                className='game__input'
                                type='url'
                                value={formData.url}
                                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                            />
                        </div>
                        <div className='game__form-group'>
                            <label className='game__label'>Published Date:</label>
                            <input
                                className='game__input'
                                type='text'
                                value={formData.timeStamp}
                                readOnly
                            />
                        </div>
                        <button className='game__button game__button--update' type='submit'>Update</button>
                        <button className='game__button game__button--delete' type='button' onClick={handleDelete}>Delete</button>
                    </form>
                </div>
            </section>
        </main>
    );

    /* ... other code ... */


};

export default Game;
