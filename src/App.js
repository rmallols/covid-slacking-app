import React, { useState } from 'react';
import Progress from './Progress/Progress';
import Actions from './Actions/Actions';
import noelia from './noelia.png';
import luna from './luna.png';
import ricardo from './ricardo.jpg';
import './App.css';

function App() {

    const victoryScore = 30;
    const [players, setPlayers] = useState([
        { id: 'noelia', name: 'Noélia', score: 0, picture: noelia },
        { id: 'luna', name: 'Luna', score: 0, picture: luna },
        { id: 'ricardo', name: 'Ricardo', score: 0, picture: ricardo },
    ]);

    const announceUpdate = ({ name, score }) => {
        const message = new SpeechSynthesisUtterance(
            `${name}, ${score} point${score > 1 ? 's' : ''}`
        );
        window.speechSynthesis.speak(message);
    };

    const updateScore = index => {
        let newPlayers = [...players];
        newPlayers[index].score++;
        setPlayers(newPlayers);
        announceUpdate(newPlayers[index]);
    };

    return (
        <div className="App">
            <Progress players={players} victoryScore={victoryScore} />
            <Actions
                players={players}
                victoryScore={victoryScore}
                onScore={updateScore} />
        </div>
    );
}

export default App;
