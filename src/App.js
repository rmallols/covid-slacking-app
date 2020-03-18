import React, { useState } from 'react';
import Progress from './Progress/Progress';
import Messages from './Messages/Messages';
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

    const announceUpdate = (text, language = 'en-GB') => {
        const message = new SpeechSynthesisUtterance();
        message.lang = language;
        message.text = text;
        speechSynthesis.speak(message);
    };

    const updateScore = index => {
        let newPlayers = [...players];
        newPlayers[index].score++;
        setPlayers(newPlayers);
        let { name, score } = newPlayers[index];
        announceUpdate(`${name}, ${score} point${score > 1 ? 's' : ''}`);
    };

    return (
        <div className="App">
            <Progress
                players={players}
                victoryScore={victoryScore}
                onScore={updateScore} />
            <Messages onUpdate={announceUpdate} />
        </div>
    );
}

export default App;
