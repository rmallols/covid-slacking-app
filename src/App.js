import React, { useState } from 'react';
import Confetti from 'react-confetti'
import Progress from './Progress/Progress';
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
    const [gameOver, setGameOver] = useState(false);
    const [timeoutId, setTimeoutId] = useState();

    const announceUpdate = (text, language = 'en-GB') => {
        const message = new SpeechSynthesisUtterance();
        message.lang = language;
        message.text = text;
        speechSynthesis.speak(message);
    };

    const getRandomMessage = () => {
        let messages = [
            'Yaiza, que no quieres mas?',
            'Tomate, dile paqué se saca la pistola!',
            'Puta, puta, puta, sin ser yo nada de eso',
            'Uy que hambre la barriga pegá',
            'Se va aver un follón que no va a saber ni doonde sa metío',
            'La cerámica de Talavera no es cosa menor, ' +
            'o dicho de otra manera, es cosa mayor',
            'Es el vecino el que elige al alcalde, y es el ' +
            'alcalde el que quiere que sean los vecinos el alcalde',
            'It\'s very difficult todo esto',
            'A robar carteras que no hay pasta pa comeeee',
            'La tranquilidad, la tranquilidad es lo que más se busca. ' +
            'Llegas a otras piscinas de aquí de Teruel y hay un ' +
            'montón de panchitos, cubanos y todo eso...'
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    };

    const setupRandomQuote = () => {
        if (!gameOver) {
            timeoutId && clearInterval(timeoutId);
            let newTimeoutId = setTimeout(() => {
                announceUpdate(getRandomMessage(), 'es-ES');
                setupRandomQuote();
            }, 20000);
            setTimeoutId(newTimeoutId);
        }
    };

    const updateScore = index => {
        let newPlayers = [...players];
        newPlayers[index].score++;
        setPlayers(newPlayers);
        let { name, score } = newPlayers[index];
        announceUpdate(`${name}, ${score} point${score > 1 ? 's' : ''}`);
        if (newPlayers[index].score === victoryScore) {
            setGameOver(true);
        }
        setupRandomQuote();
    };

    return (
        <div className="App">
            <Progress
                players={players}
                victoryScore={victoryScore}
                onScore={updateScore}
                gameOver={gameOver} />
            {gameOver && <Confetti width={window.innerWidth} />}
        </div>
    );
}

export default App;
