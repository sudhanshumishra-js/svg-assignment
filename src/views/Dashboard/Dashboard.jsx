import React, { useContext, useState } from 'react';
import GameCards from '../../components/Cards/GameCards';
import { GameContext } from '../../context/GameContext';
import Modal from 'react-modal';
import "./Dashboard.style.css";

Modal.setAppElement('#root');

const Dashboard = () => {
    const { gameState, addGame } = useContext(GameContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', author: '', url: '' });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
        const newGame = {
            ...formData,
            timeStamp: currentDateTime
        };
        addGame(newGame);
        setModalIsOpen(false);
        resetFormData();
    };
    const isFormValid = () => {
        return Object.values(formData).every(value => value !== "");
    };
    const resetFormData = () => {
        setFormData({ name: '', author: '', url: '' });
    };


    return (
        <>
            <main className='parent'>
                <section className='dashboard__section'>
                    <div className='container'>
                        <button className='dashboard__create-button' onClick={() => setModalIsOpen(true)}>Create Game</button>
                        <Modal
                            className='dashboard__modal'
                            isOpen={modalIsOpen}
                            onRequestClose={() => { setModalIsOpen(false); resetFormData(); }}
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
                                {
                                    isFormValid() ?
                                        <button className='dashboard__submit-button' type="submit">Add Game</button> :
                                        <button className='dashboard__submit-button--disabled' type="submit" disabled>Add Game</button>
                                }

                                <button className='dashboard__close-button' onClick={() => { setModalIsOpen(false); resetFormData(); }}>Close</button>
                            </form>
                        </Modal>
                        <div className='game-cards__container'>
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
                    </div>
                </section>
            </main>
        </>
    );
};

export default Dashboard;
