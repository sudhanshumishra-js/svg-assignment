import React, { useContext, useState } from 'react';
import GameCards from '../../components/Cards/GameCards';
import { GameContext } from '../../context/GameContext';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import "./Dashboard.style.css";

Modal.setAppElement('#root');

const Dashboard = () => {
    const { gameState, addGame } = useContext(GameContext);
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', author: '', url: '' });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newGame = {
            ...formData,
            timeStamp: "2022-08-01 00:00:00"
        };
        addGame(newGame);
        setModalIsOpen(false);  // Close modal after submission
    };


    console.log("gameState", gameState)
    return (
        <>
            <main className='parent'>
                <section className='dashboard__section'>
                    <div className='container'>
                        <button className='dashboard__create-button' onClick={() => setModalIsOpen(true)}>Create Game</button>
                        <Modal
                            className='dashboard__modal'
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            contentLabel="Create Game Modal"
                        >
                            <form className='dashboard__form' onSubmit={handleFormSubmit}>
                                <input
                                    className='dashboard__input'
                                    type="text"
                                    placeholder="Game Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <input
                                    className='dashboard__input'
                                    type="text"
                                    placeholder="Author"
                                    value={formData.author}
                                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                />
                                <input
                                    className='dashboard__input'
                                    type="url"
                                    placeholder="URL"
                                    value={formData.url}
                                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                />
                                <button className='dashboard__submit-button' type="submit">Add Game</button>
                                <button className='dashboard__close-button' onClick={() => setModalIsOpen(false)}>Close</button>
                            </form>
                        </Modal>
                        {
                            gameState.map((item) => {
                                return (
                                    <GameCards
                                        className='dashboard__game-card'
                                        name={item.name}
                                        author={item.author}
                                        key={item.id}
                                        id={item.id}
                                        timeStamp={item.timeStamp}
                                        url={item.url}
                                    />
                                );
                            })
                        }
                    </div>
                </section>
            </main>
        </>
    );
};

export default Dashboard;
