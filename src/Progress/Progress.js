import React from 'react';
import './Progress.css';

export default function Progress({ players, victoryScore }) {

    const getBarWidth = score => (
        `${Math.round(score / victoryScore * 100)}%`
    );

    return (
        <div className="Progress">{
            players.map(({ id, name, score, picture }, index) => (
                <div className="player" key={id}>
                    <div className="details">
                        <div className="score">{score}</div>
                        <img src={picture} alt={name} />
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