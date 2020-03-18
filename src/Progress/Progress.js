import React from 'react';
import './Progress.css';

export default function Progress({ players, victoryScore, onScore, gameOver }) {

    const getBarWidth = score => (
        `${Math.round(score / victoryScore * 100)}%`
    );

    return (
        <div className="Progress">{
            players.map(({ id, name, score, picture }, index) => (
                <div
                    className="player" key={id}
                    onClick={() => !gameOver && onScore(index)}
                >
                    <div className="details">
                        <div className="score">{score}</div>
                        <div><img src={picture} alt={name} /></div>
                        <div className="name">{name}</div>
                    </div>
                    <div
                        className={`bar index-${index}`}
                        style={{ width: getBarWidth(score) }}
                    />
                </div>
            ))
        }</div>
    );
}