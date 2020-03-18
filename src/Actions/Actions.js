import React from 'react';
import './Actions.css';

export default function Actions({ players, victoryScore, onScore }) {
    return (
        <div className="Actions">{
            players.map(({ id, name, score }, index) => (
                <button
                    key={id}
                    onClick={() => onScore(index)}
                    disabled={score === victoryScore}>
                    Point for {name}
                </button>
            ))
        }</div>
    );
}