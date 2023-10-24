import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const GameContext = React.createContext();

const GameContextProvider = (props) => {
    const getInitialState = () => {
        const storedGameState = localStorage.getItem("gameState");
        return storedGameState ? JSON.parse(storedGameState) : [];
    };


    const [gameState, setGameState] = useState(getInitialState());

    useEffect(() => {
        const storedGameState = localStorage.getItem("gameState");
        if (storedGameState) {
            setGameState(JSON.parse(storedGameState));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("gameState", JSON.stringify(gameState));
    }, [gameState]);

    const updateGame = (id, updatedGame) => {
        const updatedGameState = gameState.map(game =>
            game.id === id ? { ...updatedGame, id } : game
        );
        setGameState(updatedGameState);
    };

    const addGame = (newGame) => {
        const gameWithId = { ...newGame, id: uuidv4() };
        setGameState([...gameState, gameWithId]);
    };

    const deleteGame = (id) => {
        const updatedGameState = gameState.filter(game => game.id !== id);
        setGameState(updatedGameState);
    };

    return (
        <GameContext.Provider value={{ gameState, updateGame, deleteGame, addGame }}>
            {props.children}
        </GameContext.Provider>
    );
};

export default GameContextProvider;
