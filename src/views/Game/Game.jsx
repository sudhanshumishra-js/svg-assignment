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
            timeStamp: new Date().toISOString(),
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
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Name:
                            <input
                                type='text'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </label>
                        <label>
                            Author:
                            <input
                                type='text'
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            />
                        </label>
                        <label>
                            URL:
                            <input
                                type='url'
                                value={formData.url}
                                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                            />
                        </label>
                        <label>
                            Published Date:
                            <input
                                type='text'
                                value={formData.timeStamp}
                                readOnly
                            />
                        </label>
                        <button type='submit'>Update</button>
                        <button type='button' onClick={handleDelete}>Delete</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Game;
