import React from 'react';
import './Messages.css';

export default function Messages({ onUpdate }) {
    let messages = [
        'Yaiza, que no quieres mas?',
        'Tomate, dile paqué se saca la pistola!',
        'Puta, puta, puta, sin ser yo nada de eso'
    ]
    return (
        <div className="Messages">{
            messages.map((message, index) => (
                <button
                    key={message}
                    onClick={() => onUpdate(message, 'es-ES')}>
                    message #{index}
                </button>
            ))
        }</div>
    );
}